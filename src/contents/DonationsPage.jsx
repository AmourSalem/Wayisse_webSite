"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Textarea } from '@/components/ui/textarea'
import Image from '@/components/Image'


const FormSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Ce champ est requis',
  }),
  amount: z.string().min(2, {
    message: 'Ce champ est requis',
  }),
  donationRaison: z.string().min(2, {
    message: 'Ce champ est requis',
  }),
  number: z.string().min(2, {
    message: 'Ce champ est requis.',
  })
});

const DonationsPage = () => {

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      number:'',
      fullName: '',
      amount: '',
      donationRaison:'',
      message: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <>
      <div className=''>
        <div className='grid md:grid-cols-2 mt-[10em] md:mt-[9em] md:my-20 my-10 gap-5 px-10'>
          <div className='md:pr-15 my-auto'>
            <h1 style={{lineHeight:"1.05em"}} className='md:text-5xl text-3xl md:py-2 py-4 font-bold'>Soutenir le groupe <span className=' text-primary'>WAYISSE</span></h1>
            <p className=' text-2xl italic'>Soyez les bienvenus sur la page dédiée à notre communauté artistique et culturelle, <span className='font-bold'>Wayisse. Votre intérêt et votre soutien </span> renforcent notre engagement à <span className='font-bold'>partager la bonne nouvelle</span> de manière créative et significative à travers les expressions musicales traditionnelles.</p>
          </div>
          <div className='flex justify-center items-center '>
            <Image src="/Images/image1.jpeg" alt="hero-wayisse"/>
          </div>
        </div>
        <div className='text-2xl text-white text-center p-10 bg-primary'>
          <p className='pb-4'>Chaque battement de tambour, chaque écho de voix, et chaque moment partagé avec Wayisse devient une opportunité d'entendre et de répandre la lumière de l'évangile.</p>
          <p>Explorez notre mission et découvrez comment vous pouvez contribuer à faire résonner les mélodies de l'évangile à travers le talent artistique et culturel de Wayisse. Votre soutien est crucial pour partager la bonne nouvelle d'une manière authentique et captivante.</p>
        </div>
        <div className='p-10'>
          <Tabs defaultValue="donate" className="w-full">
            <TabsList className="grid grid-cols-2 md:w-[40em] md:gap-2 gap-5">
              <TabsTrigger
                value="donate"
                className="py-2 border-b-4 data-[state=active]:bg-white data-[state=active]:text-black border-transparent transition duration-300 data-[state=active]:border-primary hover:text-primary"
              >
                Faire un don
              </TabsTrigger>
              <TabsTrigger
                value="donationsStory"
                className="py-2 border-b-4 data-[state=active]:bg-white data-[state=active]:text-black border-transparent transition duration-300 data-[state=active]:border-primary hover:text-primary"
              >
                Historique de vos dons
              </TabsTrigger>
            </TabsList>
            <TabsContent value="donate">
              <div className='grid md:grid-cols-2 md:mt-[5em] my-10 gap-5'>
                <div className='md:pr-15 my-auto'>
                  <div className='flex justify-center items-center mr-10 mt-10 md:mt-0'>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className='md:w-[50%] w-full px-auto space-y-3'>
                        <FormField
                          control={form.control}
                          name='number'
                          render={({ field }) => (
                            <FormItem>
                              <FormControl >
                                <Input type='tel' placeholder='+299 90909090' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name='fullName'
                          render={({ field }) => (
                            <FormItem>
                              <FormControl >
                                <Input type='text' placeholder='Prénom(s) et nom' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name='amount'
                          render={({ field }) => (
                            <FormItem>
                              <FormControl >
                                <Input type='text' placeholder='Montant à donner' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name='donationRaison'
                          render={({ field }) => (
                            <FormItem>
                              <FormControl >
                                <Input type='text' placeholder='Raison de votre don' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name='message'
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Textarea className='bg-neutral-100' placeholder='Autre précision' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit">
                          Continuer
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" className='ml-3' height="20" viewBox="0 0 16 16"><g fill="currentColor"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178l1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494l-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363L1.591 6.602z"/><path d="M16 12.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95l-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686"/></g></svg>
                        </Button>
                      </form>
                    </Form>
                  </div>
                </div>
                <div className='flex justify-center md:pt-0 pt-10 items-center '>
                  <img src="/Images/donate.jpeg" alt="hero-wayisse" className='w-full md:w-[75%] rounded-lg'/>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="donationsStory">
              <div className='grid md:grid-cols-2 md:mt-[5em] my-10 gap-5'>
                <div className=' my-auto'>
                <p className='text-center pb-5 text-xl'>Veuillez renseigner votre numéro pour faire afficher la liste de vos paiements</p>
                  <div className='flex justify-center items-center mr-10 mt-10 md:mt-0'>
                    <Form {...form}>
                      <div onSubmit={form.handleSubmit(onSubmit)} className='md:w-[50%] w-full px-auto space-y-5'>
                        <FormField
                          control={form.control}
                          name='number'
                          render={({ field }) => (
                            <FormItem>
                              <FormControl >
                                <Input type='tel' placeholder='+299 90909090' {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button type="submit">
                          Continuer
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" className='ml-3' height="20" viewBox="0 0 16 16"><g fill="currentColor"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178l1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494l-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363L1.591 6.602z"/><path d="M16 12.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95l-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686"/></g></svg>
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className='flex justify-center md:pt-0 pt-10 items-center '>
                  <img src="/Images/donation-story.jpg" alt="hero-wayisse" className=" rounded-xl h-auto w-full md:w-[75%]"/>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default DonationsPage