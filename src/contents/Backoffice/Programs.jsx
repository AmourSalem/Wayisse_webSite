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
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, PlusIcon, Search } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { DatePicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const FormSchema = z.object({
  title: z.string().min(2, {
    message: 'Ajoutez un titre.',
  }),
  description: z.string().min(2, {
    message: 'Ajoutez une description.',
  }),
  deadline: z.date( {
    message: 'Choisissez un délai d\'exécution',
  }),
  responsable: z.string().min(2, {
    message: 'Ajoutez un responsable.',
  }),
});

export default function Programs() {
  const [programs, setPrograms] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [selectedProgramForStatusUpdate, setSelectedProgramForStatusUpdate] = useState(null);


  const openProgramStatusAlert = (program) => {
    setSelectedProgramForStatusUpdate(program);
    handleStatusModalOpen()
    
  }

  const updateProgramStatus = async (newStatus) => {
    try {
      const updatedProgram = await api.put(`/backoffice/program/${selectedProgramForStatusUpdate._id}`, {
        status: newStatus,
      });
  
      const updatedPrograms = programs.map((program) =>
        program._id === selectedProgramForStatusUpdate._id
          ? { ...program, status: updatedProgram.status }
          : program
      );
  
      setPrograms(updatedPrograms);
      handleStatusModalClose();
    } catch (error) {
      console.error('Error updating program status:', error);
    }
  };
  

  const handleStatusModalOpen = () => {
    setIsStatusModalOpen(true)
  }  
  
  const handleStatusModalClose = () => {
    setIsStatusModalOpen(false)
  }


  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      description: '',
      responsable:'',
      deadline:''
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
    form.setValue('responsable', program.responsable);
    form.setValue('deadline', program.deadline);
    handleAlertOpen();
  };

  const onSubmit = async (data) => {
    try {
      if (selectedProgram) {
        const updatedProgram = await api.put(`/backoffice/program/${selectedProgram._id}`, data);
        console.log(updatedProgram)
        const updatedPrograms = programs.map((prog) => (prog._id === selectedProgram._id ? updatedProgram : prog));
        setPrograms(updatedPrograms);
      } else {
        const newProgram = await api.post('/backoffice/program', {
          ...data, 
          status: 'En attente'
        });
        console.log(newProgram)
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
        {selectedProgramForStatusUpdate && (
          <AlertDialog open={isStatusModalOpen}>
            <AlertDialogContent className='rounded-lg w-[80%]'>
              <AlertDialogHeader>
                <AlertDialogTitle className='font-bold text-2xl mb-3'>
                  Modifier le statut
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <div className="flex justify-center space-x-4">
                    <Button  variant='outline' onClick={() => updateProgramStatus('En attente')} className="bg-primary text-white px-2 w-[7em]">
                      En attente
                    </Button>
                    <Button variant='outline' onClick={() => updateProgramStatus('En cours')} className="bg-[#ffd800] text-[black] px-2 w-[7em]">
                      En cours
                    </Button>
                    <Button variant='outline' onClick={() => updateProgramStatus('Fait')} className="bg-[chartreuse] text-white px-2 w-[7em]">
                      Fait
                    </Button>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
      )}

        <h5 className="my-6 scroll-m-20 text-5xl font-bold tracking-tight">
          Programmes
        </h5>
        <div className='p-10 rounded-xl shadow-lg bg-[white]'>
          <div className="flex items-center justify-between mb-6">
            <div className="search flex-shrink-0 w-2/3 md:w-1/2 xl:w-1/3 relative">
              <Input className="mb-0 py-6 pr-10" placeholder="Rechercher" />
              <Search size={"1.6rem"} color="gray" className="absolute top-0 right-2 translate-y-1/2" />
            </div>
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
                          <FormField
                            control={form.control}
                            name='responsable'
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input type='text' placeholder='Exécutant' {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name='deadline'
                            render={({ field }) => (
                              <FormItem className='flex flex-col'>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={'outline'}
                                        className={cn(
                                          'w-full font-normal bg-neutral-100 border-transparent px-5 py-7',
                                          !field.value && 'text-muted-foreground'
                                        )}>
                                        {field.value ? (
                                          format(field.value, 'yyyy-MM-dd')
                                        ) : (
                                          <span>Délai d'exécution</span>
                                        )}
                                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className='w-full p-0' align='start'>
                                    <Calendar
                                      mode='single'
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
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
          <table className="min-w-full">
            <thead className="border-b font-bold">
              <tr>
                <th scope="col" className="text-sm text-gray-900 px-1 py-3 text-left">
                  #
                </th>
                <th scope="col" className="text-sm  text-gray-900 px-1 py-3 text-left">
                  Titre
                </th>
                <th scope="col" className="text-sm  text-gray-900 px-1 py-3 text-left">
                  Echéance
                </th>
                <th scope="col" className="text-sm  text-gray-900 px-1 py-3 text-left">
                  Statut
                </th>
                <th scope="col" className="text-sm  text-gray-900 px-1 py-3 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className='space-y-4'>
              {programs.length > 0 ? (
                programs.map((prog, index) => (
                  <ProgramRow key={index} index={index + 1} program={prog} editProgram={() => editProgram(prog)} removeProgram={() => removeProgram(prog)} openStatusModal={() => openProgramStatusAlert(prog)} />
                ))
              ) : (
                <tr>
                  <td colSpan={5} className='py-20'>
                    <div className="mx-auto flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className='text-primary' width="50" height="(0" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="m7.493.015l-.386.04c-1.873.187-3.76 1.153-5.036 2.579C.66 4.211-.057 6.168.009 8.253c.115 3.601 2.59 6.65 6.101 7.518a8.034 8.034 0 0 0 6.117-.98a8 8 0 0 0 3.544-4.904c.172-.701.212-1.058.212-1.887s-.04-1.186-.212-1.887C14.979 2.878 12.315.498 9 .064C8.716.027 7.683-.006 7.493.015m1.36 1.548a6.34 6.34 0 0 1 1.987.597c.698.34 1.18.686 1.747 1.253A5.956 5.956 0 0 1 13.84 5.16c.445.915.646 1.798.646 2.84a6.188 6.188 0 0 1-.66 2.867c-.172.351-.519.914-.681 1.105l-.055.065l-4.563-4.564L3.963 2.91l.065-.055c.191-.162.754-.509 1.105-.681a6.436 6.436 0 0 1 3.72-.611M7.48 8.534l4.56 4.561l-.067.053a7.66 7.66 0 0 1-1.106.68a6.76 6.76 0 0 1-1.987.616c-.424.065-1.336.065-1.76 0c-1.948-.296-3.592-1.359-4.627-2.993a7.502 7.502 0 0 1-.634-1.332a6.62 6.62 0 0 1-.189-3.584a6.767 6.767 0 0 1 1.096-2.388c.07-.095.133-.173.141-.173c.007 0 2.065 2.052 4.573 4.56"/></svg>              
                    </div>
                    <div>
                      <p className="font-bold text-xl text-center mt-3">Aucun programme disponible</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
