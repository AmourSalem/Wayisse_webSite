import connectToDatabase from "@/db";
import Video from "../../../../schemas/videos.model";
import { writeFile, access } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(request) {

  // Fonction pour vérifier si une vidéo existe déjà
async function videoExist(title, description) {
  const existingVideo = await Video.findOne({ title, description });
  return !!existingVideo;
}
  try {
    await connectToDatabase();

    const data = await request.formData();

    let title = data.get("title");
    const description = data.get("description");

    // Vérifier si la vidéo existe déjà
    if (await videoExist(title, description)) {
      throw new Error(`Une vidéo avec le titre "${title}" et la description "${description}" existe déjà.`);
    }

    const image = data.get("image");
    const video = data.get("video");

    const allowedImageMimeTypes = ["image/jpeg", "image/jpg", "image/png"];
    const allowedVideoMimeTypes = ["video/mp4"];

    function validateMimeType(file, allowedMimeTypes) {
      if (!allowedMimeTypes.includes(file.type)) {
        throw new Error(`Type MIME non autorisé pour ${file.name}`);
      }
    }

    const imageMimeType = image.type;
    const videoMimeType = video.type;

    console.log(imageMimeType, videoMimeType)

    validateMimeType(image, allowedImageMimeTypes);
    validateMimeType(video, allowedVideoMimeTypes);

    const imageExtension = getImageExtension(imageMimeType);
    const videoExtension = getVideoExtension(videoMimeType);

    const imageFileName = `${title.split(' ').join('_').toLowerCase()}${imageExtension}`;
    const videoFileName = `${title.split(' ').join('_').toLowerCase()}${videoExtension}`;

    const imageBytes = await image.arrayBuffer();
    const videoBytes = await video.arrayBuffer();

    const imageBuffer = Buffer.from(imageBytes);
    const videoBuffer = Buffer.from(videoBytes);

    const imagePath = `public/uploads/Images/${imageFileName}`;
    const videoPath = `public/uploads/Videos/${videoFileName}`;

    // Vérifier si les fichiers existent déjà
    const imageExists = await fileExists(imagePath);
    const videoExists = await fileExists(videoPath);

    // Si les fichiers existent, les remplacer, sinon, créer de nouveaux fichiers
    await Promise.all([
      imageExists ? replaceFile(imagePath, imageBuffer) : writeFile(imagePath, imageBuffer),
      videoExists ? replaceFile(videoPath, videoBuffer) : writeFile(videoPath, videoBuffer),
    ]);

    const newVideo = await Video.create({
      title: title,
      description: description,
      category: data.get("category"),
      image: `/uploads/Images/${imageFileName}`,
      video: `/uploads/Videos/${videoFileName}`,
    });

    console.log(newVideo);

    return new NextResponse(
      JSON.stringify({ message: "Vidéo créée", newVideo }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return new NextResponse(
      JSON.stringify({ message: "Erreur d'envoi " + error.message }),
      { status: 500 }
    );
  }
}

// Fonction pour obtenir l'extension de fichier pour les images
function getImageExtension(mimeType) {
  const imageMimeTypes = {
    "image/jpeg": ".jpeg",
    "image/jpg": ".jpg",
    "image/png": ".png",
  };

  return imageMimeTypes[mimeType];
}

// Fonction pour obtenir l'extension de fichier pour les vidéos
function getVideoExtension(mimeType) {
  const videoMimeTypes = {
    "video/mp4": ".mp4",
  };

  return videoMimeTypes[mimeType];
}



// Fonction pour vérifier si un fichier existe
async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch (error) {
    return false;
  }
}

// Fonction pour remplacer un fichier existant
async function replaceFile(path, data) {
  await writeFile(path, data);
}





export async function GET (request) {
  try {
    await connectToDatabase();
    const videos = await Video.find();
    return NextResponse.json(videos, { status: 200 });
  } catch (error) {
    return NextResponse("Erreur d'envoi " + error, { status: 500 });
  }
}
