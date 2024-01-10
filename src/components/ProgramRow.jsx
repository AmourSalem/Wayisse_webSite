function getBackgroundColor (status) {
  switch (status) {
    case 'En attente':
      return 'bg-[#ffd800]';
    case 'Programmée':
      return 'bg-[chartreuse] text-white';
    case 'Exécutée':
      return 'bg-primary text-white';
    default:
      return 'bg-[whitesmoke] ';
  }
};

export default function ProgramRow ({ program, removeProgram, editProgram }) {

  return (
    <div className="container p-4 my-4 rounded-md bg-[whitesmoke]">
      <h4 className="my-4 scroll-m-20 text-lg font-bold tracking-tight">
        {program?.title}
      </h4>
      <p> {program?.description} </p>
      <hr className="my-6 bg-[black] font-md" />
      <div className="flex justify-between items-center">
        <div className={`p-2 ${getBackgroundColor(program.status)} rounded-sm`}>
          <p className="block font-sans text-sm font-medium leading-none antialiased">
            {program?.status}
          </p>
        </div>
        {
          program?.status === "En attente" ? (
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <button className="mr-2" onClick={() => editProgram(program)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1l1-4ZM15 5l3 3" />
                    </svg>
                  </button>
                  <button onClick={() => removeProgram(program)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ) :
          null
        }
      </div>
    </div>
  );
};


