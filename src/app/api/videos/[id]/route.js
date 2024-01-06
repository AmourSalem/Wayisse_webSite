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