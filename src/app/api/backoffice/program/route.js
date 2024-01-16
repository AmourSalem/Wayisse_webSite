import connectToDatabase from "@/db";
import Program from "../../../../../schemas/program.model";
import { NextResponse } from "next/server";



export async function GET (request) {
  try {
    await connectToDatabase();
    const programs = await Program.find();
    return NextResponse.json(programs, { status: 200 });
  } catch (error) {
    return NextResponse("Erreur d'envoi " + error, { status: 500 });
  }
}



export async function POST (request) {
  const {title, description, responsable, deadline, status} = await request.json()


  try {
    await connectToDatabase();
    const program = await Program.create({title, description, responsable, deadline, status})

    return NextResponse.json(program, {status: 201})

  } catch (error) { 
    return NextResponse("Erreur d'envoi " + error.message, { status: 500 });
  }

};