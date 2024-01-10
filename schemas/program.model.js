import mongoose, {Schema} from "mongoose";

const programSchema = new Schema(
  {
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true, unique: true},
    status: {type: String, default: "En attente"}
  },
  {
    timestamps: true
  }
)

const Program = mongoose.models.Program || mongoose.model("Program", programSchema)

export default Program;