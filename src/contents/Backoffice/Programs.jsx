"use client"
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import ProgramRow from '@/components/ProgramRow';
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { api } from '@/helpers/api';

const FormSchema = z.object({
  title: z.string().min(2, {
    message: 'Ajoutez un titre.',
  }),
  description: z.string().min(2, {
    message: 'Ajoutez une description.',
  }),
});

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);



  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      description: ''
    }
  });

  const handleAlertClose = () => {
    setIsAlertOpen(false);
    form.reset()
  };

  const handleAlertOpen = () => {
    setIsAlertOpen(true);
  };

  const editProgram = (program) => {
    setSelectedProgram(program);
    form.setValue('title', program.title);
    form.setValue('description', program.description);
    handleAlertOpen();
  };



/*   const onSubmit = async () => {
    try {
      const data = form.getValues();
      const response = await api.post("/contact", {
        fullName: data.fullName,
        email: data.email,
        message: data.message,
      });
  
      console.log(response);
      form.reset()
    } catch (error) {
      console.error(error.message);
    }
  }; */



/*   const onSubmit = async (data) => {
    try {
       if (selectedProgram) {
        const updatedProgram = await api.put(`/backoffice/program/${selectedProgram._id}`, data);
        const updatedPrograms = programs.map((prog) => (prog._id === selectedProgram._id ? updatedProgram.data : prog));
        setPrograms(updatedPrograms);
      } else { 
        await api.post('/backoffice/program', {
          title : data.title,
          description: data.description
        })
        .then(res => {
          console.log(res)
          const newPrograms = [res, ...programs]
          setPrograms(newPrograms);
          console.log(programs)
        });
       } 

      handleAlertClose();
      setSelectedProgram(null);
    } catch (error) {
      console.error('Erreur lors de la soumission du programme :', error);
    }
  }; */


  const onSubmit = async (data) => {
    try {
      if (selectedProgram) {
        const updatedProgram = await api.put(`/backoffice/program/${selectedProgram._id}`, data);
        const updatedPrograms = programs.map((prog) => (prog._id === selectedProgram._id ? updatedProgram.data : prog));
        setPrograms(updatedPrograms);
      } else {
        const newProgram = await api.post('/backoffice/program', data);
        setPrograms([newProgram, ...programs]);
      }

      handleAlertClose();
      setSelectedProgram(null);
    } catch (error) {
      console.error('Erreur lors de la soumission du programme :', error);
    }
  };

  const removeProgram = async (program) => {
    try {
      await api.delete(`/backoffice/program/${program._id}`);
      const newPrograms = programs.filter((prog) => prog._id !== program._id);
      setPrograms(newPrograms);
    } catch (error) {
      console.error('Erreur lors de la suppression du programme :', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await api.get('/backoffice/program');
      setPrograms(response);
    } catch (error) {
      console.error('Erreur lors de la récupération des programmes :', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <div className='py-20 px-10 md:px-[10em]'>
        <div className='space-y-2 flex justify-center'>
          <AlertDialog open={isAlertOpen}>
            <AlertDialogTrigger asChild>
              <Button onClick={handleAlertOpen} className="w-full md:w-[50%] text-white">Nouveau programme</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className='rounded-lg w-[80%]'>
              <AlertDialogHeader>
                <AlertDialogTitle className='font-bold text-2xl mb-3'>
                  Programme
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
                      <FormField
                        control={form.control}
                        name='title'
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input type='text' placeholder='Titre du programme' {...field} />
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
                      <Button type="submit" className="w-full">Soumettre</Button>
                      <Button type="reset" onClick={() => handleAlertClose()} className="w-full border-lg border-primary " variant={'outline'}>Annuler</Button>
                    </form>
                  </Form>
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <h5 className="my-6 scroll-m-20 text-2xl font-bold tracking-tight">
          Programmes 
        </h5>
        <div>
          {programs.length > 0 ? (
            programs.map((prog) => (
              <ProgramRow key={prog._id} program={prog} editProgram={() => editProgram(prog)} removeProgram={() => removeProgram(prog)} />
            ))
          ) : (
            <div className=" w-full py-20 space-y-5">
              <div className="mx-auto flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className='text-primary' width="60" height="60" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="m7.493.015l-.386.04c-1.873.187-3.76 1.153-5.036 2.579C.66 4.211-.057 6.168.009 8.253c.115 3.601 2.59 6.65 6.101 7.518a8.034 8.034 0 0 0 6.117-.98a8 8 0 0 0 3.544-4.904c.172-.701.212-1.058.212-1.887s-.04-1.186-.212-1.887C14.979 2.878 12.315.498 9 .064C8.716.027 7.683-.006 7.493.015m1.36 1.548a6.34 6.34 0 0 1 1.987.597c.698.34 1.18.686 1.747 1.253A5.956 5.956 0 0 1 13.84 5.16c.445.915.646 1.798.646 2.84a6.188 6.188 0 0 1-.66 2.867c-.172.351-.519.914-.681 1.105l-.055.065l-4.563-4.564L3.963 2.91l.065-.055c.191-.162.754-.509 1.105-.681a6.436 6.436 0 0 1 3.72-.611M7.48 8.534l4.56 4.561l-.067.053a7.66 7.66 0 0 1-1.106.68a6.76 6.76 0 0 1-1.987.616c-.424.065-1.336.065-1.76 0c-1.948-.296-3.592-1.359-4.627-2.993a7.502 7.502 0 0 1-.634-1.332a6.62 6.62 0 0 1-.189-3.584a6.767 6.767 0 0 1 1.096-2.388c.07-.095.133-.173.141-.173c.007 0 2.065 2.052 4.573 4.56"/></svg>              </div>
              <div>
                <p className="font-bold text-xl text-center">Aucun programme disponible</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
