import Link from "next/link";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { TableCell, TableRow } from "./ui/table";

function getBackgroundColor (status) {
  switch (status) {
    case 'En cours':
      return 'bg-[#ffd800]';
    case 'Fait':
      return 'bg-[chartreuse] text-white';
    case 'En attente':
      return 'bg-primary text-white';
    default:
      return 'bg-[whitesmoke] ';
  }
};

export default function ProgramRow ({ program, removeProgram, openStatusModal, editProgram, index }) {

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  const handleAlertOpen = () => {
    setIsAlertOpen(true);
  };

  return (    
  <TableRow className="py-10">
    <TableCell >{index}</TableCell >
    <TableCell >{ program.title }</TableCell >
    <TableCell >{ program.deadline }</TableCell >
    <TableCell >
      <Button variant="outline" onClick={() => openStatusModal(program)} className={`${getBackgroundColor(program.status)} border-primary py-2 px-4 w-[7em] rounded-md`}>
        {program.status}
      </Button>
    </TableCell >
    <TableCell >
      <div className="flex justify-center md:justify-between items-center">
        <div className="flex items-center">
          <div className="flex">
          <AlertDialog open={isAlertOpen}>
            <AlertDialogTrigger asChild>
              <button onClick={handleAlertOpen} className="w-full md:w-[50%] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" className='text-primary' height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"/></svg>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className='rounded-lg w-[80%]'>
              <AlertDialogHeader>
                <AlertDialogTitle className='font-bold text-2xl mb-3'>
                  Programme
                </AlertDialogTitle>
                <AlertDialogDescription>
                  
                  <table   className="py-5 noResponsive" style={{border:'!none'}}>
                    <tbody className="px-3">
                      <tr>
                        <td className="px-3">Titre</td>
                        <td> {program.title} </td>
                      </tr>
                      <tr>
                        <td className="px-3 " style={{verticalAlign:'top'}}>Description</td>
                        <td>{ program.description }</td>
                      </tr>
                      <tr>
                        <td className="px-3">Echéance</td>
                        <td>{ program.deadline }</td>
                      </tr>
                      <tr >
                        <td className="px-3" >Exécutant</td>
                        <td >{ program.responsable }</td>
                      </tr>
                      <tr>
                        <td className="px-3">Statut</td>
                        <td>{ program.status }</td>
                      </tr>
                    </tbody>
                  </table>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex justify-end">
                <AlertDialogTrigger className="flex" asChild>
                  <Button onClick={handleAlertClose} className=" w-[20%] text-white">
                    Fermer
                  </Button>
                </AlertDialogTrigger>
              </div>
            </AlertDialogContent>
          </AlertDialog>
            <button className={`mx-2`} onClick={() => editProgram(program)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='text-primary' viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1l1-4ZM15 5l3 3" />
              </svg>
            </button>
            <button onClick={() => removeProgram(program)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='text-primary' viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </TableCell >
  </TableRow>
  );
};


