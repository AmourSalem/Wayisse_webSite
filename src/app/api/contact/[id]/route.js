import connectToDatabase from "@/db";
import Contact from "../../../../../schemas/message.model";
import { NextResponse } from "next/server";

export async function PUT (request, {params}) {

  const { id } = params;
  const {  fullName, email, message } = await request.json();

 try {
  await connectToDatabase()
  await Contact.findByIdAndUpdate(id, { fullName, email, message });
  return NextResponse.json({message: "Contact mis à jour"}, {status: 200})

 } catch (error) {
  return NextResponse("Erreur d'envoi" + error, { status: 500 });
 }
}


export async function GET (request, {params}) {
  const { id } = params;
  try {
    await connectToDatabase();
    const contact = await Contact.findOne({_id: id})
    return NextResponse.json({contact}, { status: 200 });

  } catch (error) {
    return NextResponse("Erreur d'envoi" + error, { status: 500 });
  }
}