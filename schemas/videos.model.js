//fichier schema d'enregistrement des vidéos
import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema(
  {
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true, unique: true},
    image: {type: String, required: true, unique: true},
    category: {type: String, enum: ['dot', 'annif', 'wedding', 'evangelisation', 'child', 'others' ], required: true},
    video: {type: String, required: true, unique: true}
  },
  {
    timestamps: true
  }
)

const Video = mongoose.models.Video || mongoose.model("Video", videoSchema)

export default Video;