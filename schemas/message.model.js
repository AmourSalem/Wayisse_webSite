//fichier schema d'enregistrement des messages
import mongoose, {Schema} from "mongoose";

const contactSchema = new Schema(
  {
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true}
  },
  {
    timestamps: true
  }
)

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema)

export default Contact;