import connectToDatabase from "@/db";
import Program from "../../../../../../schemas/program.model";
import { NextResponse } from "next/server";

export async function PUT (request, {params}) {

  const { id } = params;
  const {title, description, responsable, deadline, status} = await request.json();

 try {
  await connectToDatabase()
   const newProgram = await Program.findByIdAndUpdate(id, {title, description, responsable, deadline, status}, {new: true});
   console.log(newProgram)
  return NextResponse.json(newProgram, {status: 200})

 } catch (error) {
  return NextResponse("Erreur d'envoi" + error, { status: 500 });
 }
}

export async function DELETE (request, {params}) {
  const { id } = params;

  try {
    if(id) {
      await connectToDatabase();
      await Program.findByIdAndDelete(id)
      return NextResponse.json({message: "Programme suprimé"}, {status: 201})
    }

  } catch (error) {
    return NextResponse("Erreur d'envoi " + error, { status: 500 });

  }
  
}