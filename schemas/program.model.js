import mongoose, {Schema} from "mongoose";

const programSchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, enum:['En attente', 'En cours', 'Fait']},
    deadline: {type: String, required: true},
    responsable : {type: String, required: true},
  },
  {
    timestamps: true
  }
)

const Program = mongoose.models.Program || mongoose.model("Program", programSchema)

export default Program;