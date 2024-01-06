"use client"
import React from 'react';
import Link from 'next/link';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useForm } from "react-hook-form"
import { api } from '@/helpers/api';


const FormSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Ajoutez votre nom.',
  }),
  email: z.string().min(2, {
    message: 'Ajoutez votre mail.',
  }),
  message: z.string().min(2, {
    message: 'Ajoutez votre message.',
  }),
});

const Contact = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async () => {
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
  };
  

  return (
    <>
      <div className='grid md:grid-cols-2 mt-[10em] md:mt-[10em] md:my-20 my-10 gap-5 px-10'>
        <div className='md:pr-15 my-auto'>
          <h3 className='font-bold text-primary'>__ BONJOUR 👋 </h3>
          <h1 style={{ lineHeight: "1.05em" }} className='md:text-5xl text-3xl md:py-2 py-4 font-bold'> Discutons et travaillons ensemble pour Christ</h1>
          <p className='pr-20 text-2xl italic'>Nous évangélisons à travers les musiques traditionnelles et locales de notre pays</p>
          <div className='py-4'>
            <Link href='/soutiens'>
              <Button className="bg-[black]" >
                Nous soutenir
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='ml-2' viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 15l5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68l4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19m-5-5l6 6" /></svg>
              </Button>
            </Link>
          </div>
        </div>
        <div className='flex justify-center items-center '>
          <img src="/Images/image4.jpeg" alt="hero-wayisse" className='rounded-xl w-full h-auto' />
        </div>
      </div>
      <div className='grid md:grid-cols-2 py-20 gap-5 px-10'>
        <div className='md:pr-15 my-auto font-bold'>
          <Link href="#" className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='mr-10 text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M2 20V4h20v16zm10-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z" /></svg>
            wayisse@gmail.com
          </Link>
          <p className='flex items-center py-10'>
            <svg xmlns="http://www.w3.org/2000/svg" className='mr-10 text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81zM12 3L2 12h3v8h6v-6h2v6h6v-8h3z" /></svg>
            Calavi, Zogbadjè
          </p>
          <Link href="#" className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='mr-10 text-primary' width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M19 16.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H3c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M4 6h1.5c.1.9.3 1.8.5 2.6L4.8 9.8C4.4 8.6 4.1 7.3 4 6m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zM16 9V7.5h-3.5L18 2l-1-1l-5.5 5.5V3H10v6zm1-3v1.5h3.5L15 13l1 1l5.5-5.5V12H23V6z" /></svg>
            +229 22 748 274 284
          </Link>
        </div>
        <div className='flex justify-center items-center mr-10 mt-10 md:mt-0'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
              <FormField
                control={form.control}
                name='fullName'
                render={({ field }) => (
                  <FormItem>
                    <FormControl >
                      <Input type='text' placeholder='Votre nom' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl >
                      <Input type='text' placeholder='Votre email' {...field} />
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
                      <Textarea className='bg-neutral-100' placeholder='Votre message' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">
                Envoyer
                <svg xmlns="http://www.w3.org/2000/svg" width="20" className='ml-3' height="20" viewBox="0 0 16 16"><g fill="currentColor"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178l1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494l-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363L1.591 6.602z"/><path d="M16 12.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95l-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686"/></g></svg>
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;
