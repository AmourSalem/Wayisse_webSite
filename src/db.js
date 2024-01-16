import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/', {
      dbName:'WAYISSE'
    });
    console.log("Connexion base de données effectuée avec succès");
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

export default connectToDatabase;
