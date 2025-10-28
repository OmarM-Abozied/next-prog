import mongoose from "mongoose";

export async function dbConnection() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB Connected");
  } catch (error) {
    console.error("error in db connected",error );
    process.exit(1);
  }
}
