import Link from "next/link";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { useState } from "react";
import { Button } from "./ui/button";

export default function ContactRow ({ contact, removeContact, index }) {

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  const handleAlertOpen = () => {
    setIsAlertOpen(true);
  };

  return (    
  <tr className="py-10">
    <td>{index}</td>
    <td>{ contact.fullName }</td>
    <td>{ contact.email }</td>
    <td>
      <div className="flex justify-center md:justify-between items-center">
        <div className="flex items-center">
          <div className="flex space-x-3 items-center">
            <AlertDialog open={isAlertOpen}>
              <AlertDialogTrigger asChild>
                <button onClick={handleAlertOpen} className="w-full md:w-[50%] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" className='text-primary' height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"/></svg>
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className='rounded-lg w-[80%]'>
                <AlertDialogHeader>
                  <AlertDialogTitle className='font-bold text-2xl mb-3'>
                    Contact
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    <table  className="py-5" style={{border:'!none'}}>
                      <tbody className="px-3">
                        <tr>
                          <td className="px-3">Envoyé par :</td>
                          <td> {contact.fullName} </td>
                        </tr>
                        <tr>
                          <td className="px-3 " >Email</td>
                          <td>{ contact.email }</td>
                        </tr>
                        <tr>
                          <td className="px-3" style={{verticalAlign:'top'}}>Le</td>
                          <td>{ contact.createdAt }</td>
                        </tr>
                        <tr>
                          <td className="px-3" style={{verticalAlign:'top'}}>Message</td>
                          <td>{ contact.message }</td>
                        </tr>
                      </tbody>
                    </table>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="flex justify-end space-x-3">
                  <AlertDialogTrigger className="flex" asChild>
                    <Button onClick={handleAlertClose} className=" w-[20%] text-white">
                      Fermer
                    </Button>
                  </AlertDialogTrigger>
                  <Link href={contact.email} className=" space-x-2 bg-primary text-[white] items-center flex p-2 rounded-md">
                    Répondre
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="currentColor" d="m240.49 103.52l-80-80A12 12 0 0 0 140 32v36.74c-25.76 3.12-53.66 15.89-76.75 35.47c-29.16 24.74-47.32 56.69-51.14 90A16 16 0 0 0 39.67 207c10.46-11.14 47-45.74 100.33-50.42V192a12 12 0 0 0 20.48 8.48l80-80a12 12 0 0 0 .01-16.96M164 163v-19a12 12 0 0 0-12-12c-49 0-86.57 21.56-109.79 40.11c7.13-18.16 19.63-35.22 36.57-49.59C101.3 103.41 128.67 92 152 92a12 12 0 0 0 12-12V61l51 51Z"></path></svg>
                  </Link>
                </div>
              </AlertDialogContent>
            </AlertDialog>
            <button onClick={() => removeContact(contact)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='text-primary' viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </td>
  </tr>
  );
};


