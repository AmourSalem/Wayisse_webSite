//fichier route.js (api) de la page contact (api/contact/route.js)

import connectToDatabase from "@/db";
import { NextResponse } from "next/server";
import Contact from "../../../../schemas/message.model";

 export async function GET (request) {
  try {
    await connectToDatabase();
    const contacts = await Contact.find();
    return NextResponse.json({contacts}, { status: 200 });
  } catch (error) {
    return NextResponse("Erreur d'envoi " + error, { status: 500 });
  }
}; 

export async function POST (request) {
  const {fullName, email, message} = await request.json()


  try {
    await connectToDatabase();
    const contact = await Contact.create({fullName, email, message})

    return NextResponse.json({message: "Contact créé", contact}, {status: 201})

  } catch (error) { 
    return NextResponse("Erreur d'envoi " + error, { status: 500 });
  }

};

export async function DELETE (request) {
  const id = request.nextUrl.searchParams.get("id")

  try {
    await connectToDatabase();
    await Contact.findByIdAndDelete(id)

    return NextResponse.json({message: "Contact supprimé"}, {status: 200})

  } catch (error) {
    return NextResponse("Erreur d'envoi " + error, { status: 500 });

  }
}