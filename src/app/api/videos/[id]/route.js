import { NextResponse } from "next/server";
import Video from "../../../../../schemas/videos.model";
import connectToDatabase from "@/db";


export async function GET (request, {params}) {
  const { id } = params;


  try {
    await connectToDatabase();
    const video = await Video.findOne({_id: id})
    return NextResponse.json(video, { status: 200 });

  } catch (error) {
    return NextResponse("Erreur d'envoi" + error, { status: 500 });
  }
}

export async function DELETE (request, {params}) {
  const { id } = params;

  try {
    if(id) {
      await connectToDatabase();
      await Video.findByIdAndDelete(id)
      return NextResponse.json({message: "Programme suprimé"}, {status: 201})
    }

  } catch (error) {
    return NextResponse("Erreur d'envoi " + error, { status: 500 });

  }
  
}