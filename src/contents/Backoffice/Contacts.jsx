"use client"
import ContactRow from '@/components/ContactRow'
import { Input } from '@/components/ui/input'
import { api } from '@/helpers/api'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Contacts = () => {

  const [contacts, setContacts] = useState([])

  const fetchData = async () => {
    try {
      const response = await api.get('/contact');
      setContacts(response);
    } catch (error) {
      console.error('Erreur lors de la récupération des programmes :', error);
    }
  };

  const removeContact = async (contact) => {
    try {
      await api.delete(`/contact/${contact._id}`);
      const newContacts = contacts.filter((cont) => cont._id !== contact._id);
      setContacts(newContacts);
    } catch (error) {
      console.error('Erreur lors de la suppression du programme :', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className='py-20 px-10 md:px-[10em]'>
      <h5 className="my-6 scroll-m-20 text-5xl font-bold tracking-tight">
        Contacts
      </h5>
      <div className='p-10 rounded-xl shadow-lg bg-[white]'>
        <table className="min-w-full">
          <thead className="border-b font-bold">
            <tr>
              <th scope="col" className="text-sm text-gray-900 px-1 py-3 text-left">
                #
              </th>
              <th scope="col" className="text-sm  text-gray-900 px-1 py-3 text-left">
                Expéditeur
              </th>
              <th scope="col" className="text-sm  text-gray-900 px-1 py-3 text-left">
                Email
              </th>
              <th scope="col" className="text-sm  text-gray-900 px-1 py-3 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody className='space-y-4'>
            {contacts.length > 0 ? (
              contacts.map((cont, index) => (
                <ContactRow key={index} index={index + 1} contact={cont} removeContact={() => removeContact(cont)} />
              ))
            ) : (
              <tr>
                <td colSpan={5} className='py-20'>
                  <div className="mx-auto flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className='text-primary' width="50" height="(0" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="m7.493.015l-.386.04c-1.873.187-3.76 1.153-5.036 2.579C.66 4.211-.057 6.168.009 8.253c.115 3.601 2.59 6.65 6.101 7.518a8.034 8.034 0 0 0 6.117-.98a8 8 0 0 0 3.544-4.904c.172-.701.212-1.058.212-1.887s-.04-1.186-.212-1.887C14.979 2.878 12.315.498 9 .064C8.716.027 7.683-.006 7.493.015m1.36 1.548a6.34 6.34 0 0 1 1.987.597c.698.34 1.18.686 1.747 1.253A5.956 5.956 0 0 1 13.84 5.16c.445.915.646 1.798.646 2.84a6.188 6.188 0 0 1-.66 2.867c-.172.351-.519.914-.681 1.105l-.055.065l-4.563-4.564L3.963 2.91l.065-.055c.191-.162.754-.509 1.105-.681a6.436 6.436 0 0 1 3.72-.611M7.48 8.534l4.56 4.561l-.067.053a7.66 7.66 0 0 1-1.106.68a6.76 6.76 0 0 1-1.987.616c-.424.065-1.336.065-1.76 0c-1.948-.296-3.592-1.359-4.627-2.993a7.502 7.502 0 0 1-.634-1.332a6.62 6.62 0 0 1-.189-3.584a6.767 6.767 0 0 1 1.096-2.388c.07-.095.133-.173.141-.173c.007 0 2.065 2.052 4.573 4.56"/></svg>              
                  </div>
                  <div>
                    <p className="font-bold text-xl text-center mt-3">Aucun contact disponible</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Contacts