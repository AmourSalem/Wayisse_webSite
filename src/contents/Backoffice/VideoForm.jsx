"use client"
// Importez les modules nécessaires
import React from 'react';
import { Form, FormField, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { useForm } from "react-hook-form";
import { api } from '@/helpers/api';

// Schéma de validation pour le formulaire
const FormSchema = z.object({
  title: z.string().min(2, {
    message: 'Ajoutez le titre de la vidéo.',
  }),
  description: z.string().min(2, {
    message: 'Ajoutez la description de la vidéo.',
  }),
  image: z.string().min(2, {
    message: 'Ajoutez le chemin de l\'image de la vidéo.',
  }),
  video: z.string().min(2, {
    message: 'Ajoutez le chemin de la vidéo.',
  }),
});

const VideoForm = () => {
  // Utilisez react-hook-form pour gérer le formulaire
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      description: '',
      image: '',
      video: '',
    },
  });

  // Fonction appelée lors de la soumission du formulaire
  const onSubmit = async () => {
    try {
      // Obtenez les valeurs du formulaire
      const data = form.getValues();
      
      // Effectuez la requête POST vers votre backend
      const response = await api.post("/votre-route-pour-les-videos", {
        title: data.title,
        description: data.description,
        image: data.image,
        video: data.video,
      });

      console.log(response);
      form.reset(); // Réinitialisez le formulaire après l'envoi avec succès
    } catch (error) {
      console.error(error.message);
    }
  };

  // Rendez le formulaire avec les champs nécessaires
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <div>
              <label>Titre de la vidéo</label>
              <input type='text' placeholder='Titre' {...field} />
              <FormMessage />
            </div>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <div>
              <label>Description de la vidéo</label>
              <textarea placeholder='Description' {...field} />
              <FormMessage />
            </div>
          )}
        />
        <FormField
          control={form.control}
          name='image'
          render={({ field }) => (
            <div>
              <label>Chemin de l'image</label>
              <input type='file' {...field} />
              <FormMessage />
            </div>
          )}
        />
        <FormField
          control={form.control}
          name='video'
          render={({ field }) => (
            <div>
              <label>Chemin de la vidéo</label>
              <input type='file' {...field} />
              <FormMessage />
            </div>
          )}
        />
        <Button type="submit">
          Envoyer la vidéo
          <svg xmlns="http://www.w3.org/2000/svg" width="20" className='ml-3' height="20" viewBox="0 0 16 16">
            <g fill="currentColor">
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178l1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494l-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363L1.591 6.602z"/>
            </g>
          </svg>
        </Button>
      </form>
    </Form>
  );
};

export default VideoForm;
