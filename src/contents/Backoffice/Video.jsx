"use client"

import VideoRow from '@/components/VideoRow';
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { api } from '@/helpers/api';
import { PlusIcon, Search } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const FileSchema = z.object({
  data: z.unknown(),
  mimeType: z.string(),
});

const FormSchema = z.object({
  title: z.string().min(2, { message: 'Ajoutez un titre.' }),
  description: z.string().min(2, { message: 'Ajoutez une description.' }),
  image: FileSchema.nullable(),
  video: FileSchema.nullable(),
  category: z.string().min(2, { message: 'Ajoutez une catégorie.' }),
});

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null)

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      description: '',
      image: null,
      video: null,
      category: '',
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  const handleAlertClose = () => {
    setIsAlertOpen(false);
    form.reset();
  };

  const handleAlertOpen = () => {
    setIsAlertOpen(true);
  };

  const editVideo = (video) => {
    setSelectedVideo(video);
    form.setValue('title', video.title);
    form.setValue('description', video.description);
    form.setValue('category', video.category);
    form.setValue('image', null);
    form.setValue('video', null);
    handleAlertOpen();
  };

  const fetchData = async () => {
    try {
      const response = await api.get('/videos');
      setVideos(response);
      setIsLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des vidéos :', error);
      setIsLoading(false);
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);

    if (data.image) {
      formData.append('image', data.image[0].data);
    }

    if (data.video) {
      formData.append('video', data.video[0].data);
    }

    try {
      if (selectedVideo) {
        const response = await fetch(`http://localhost:3000/api/videos/${selectedVideo._id}`, {
          method: 'PUT',
          body: formData,
        });

        if (response.ok) {
          const updatedVideo = await response.json();
          const updatedVideos = videos.map((video) => (video._id === selectedVideo._id ? updatedVideo.data : video));
          setVideos(updatedVideos);
        } else {
          console.error('Erreur lors de la mise à jour de la vidéo:', response.status);
        }
      } else {
        const response = await fetch(`http://localhost:3000/api/videos`, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const newVideo = await response.json();
          setVideos([newVideo.data, ...videos]);
        } else {
          console.error('Erreur lors de la création de la vidéo:', response.status);
        }
      }

      handleAlertClose();
      setSelectedVideo(null);
    } catch (error) {
      console.error('Erreur lors de la soumission de la vidéo :', error);
    }
  };

  const removeVideo = async (video) => {
    try {
      await api.delete(`/videos/${video._id}`);
      const newVideos = videos.filter((vid) => vid._id !== video._id);
      setVideos(newVideos);
    } catch (error) {
      console.error('Erreur lors de la suppression de la vidéo :', error);
    }
  };

  return (
    <>
      <div className='py-20 px-10 md:px-[10em]'>
      <h5 className="my-6 scroll-m-20 text-5xl font-bold tracking-tight">
          Vidéos 
        </h5>
        <div className='p-10 rounded-xl shadow-lg bg-[white]'>
          <div className="flex items-center justify-end mb-10">{/* 
            <div className="search flex-shrink-0 w-2/3 md:w-1/2 xl:w-1/3 relative">
              <Input className="mb-0 py-6 pr-10" placeholder="Rechercher" />
              <Search size={"1.6rem"} color="gray" className="absolute top-0 right-2 translate-y-1/2" />
            </div> */}
            <div className='space-y-2 flex justify-center'>
              <AlertDialog open={isAlertOpen}>
                <AlertDialogTrigger asChild>
                  <Button className="px-[.7em]" onClick={handleAlertOpen}>
                    <PlusIcon />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className='rounded-lg w-[80%]'>
                  <AlertDialogHeader>
                    <AlertDialogTitle className='font-bold text-2xl mb-3'>
                      Poster une nouvelle vidéo
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} encType="multipart/form-data" className='w-full space-y-6'>
                          <FormField
                            control={form.control}
                            name='title'
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input type='text' placeholder='Titre de la vidéo' {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name='description'
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Textarea className='bg-neutral-100' placeholder='Ajoutez une description' {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name='image'
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input type='file' placeholder='Choisissez une image' {...field} accept='image/*' />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name='video'
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input type='file' placeholder='Choisissez une vidéo' {...field} accept='video/*' />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name='category'
                            render={({ field }) => (
                              <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder='Sélectionner une catégorie' />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value='evangelisation'>Evangélisation</SelectItem>
                                    <SelectItem value='dot'>Dot</SelectItem>
                                    <SelectItem value='wedding'>Mariage</SelectItem>
                                    <SelectItem value='annif'>Anniversaire</SelectItem>
                                    <SelectItem value='child'>Sortie d'enfant</SelectItem>
                                    <SelectItem value='others'>Autres</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button type="submit" className="w-full">Soumettre</Button>
                          <Button type="reset" onClick={() => handleAlertClose()} className="w-full border-lg border-primary " variant={'outline'}>Annuler</Button>
                        </form>
                      </Form>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <Table className="min-w-full">
            <TableHeader className="border-b ">
              <TableRow>
                <TableHead className="text-sm text-gray-900 font-bold">#</TableHead>
                <TableHead className="text-sm text-gray-900 font-bold">Titre</TableHead>
                <TableHead className="text-sm text-gray-900 font-bold">Catégorie</TableHead>
                <TableHead className="text-sm text-gray-900 font-bold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='space-y-4'>
              {videos.map((video, index) => (
                <VideoRow key={video._id} video={video} index={index + 1} editVideo={() => editVideo(video)} removeVideo={() => removeVideo(video)} />
              ))}
            </TableBody>
          </Table>

       {/*    <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-3 text-left">
                  #
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-3 text-left">
                  Titre
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-3 text-left">
                  Catégorie
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-3 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className='space-y-4'>
              {videos.map((video, index) => (
                <VideoRow key={video._id} video={video} index={index + 1} editVideo={() => editVideo(video)} removeVideo={() => removeVideo(video)} />
              ))}
            </tbody>
          </table> */}
        </div>

      </div>
    </>
  );
};

export default Video;
