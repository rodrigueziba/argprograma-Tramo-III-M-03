import mongoose from "mongoose";
import {settingDotEnvDb} from "../config/config.js";

const { db } = settingDotEnvDb();

export const connectDB = async () => {
  try {
    console.log(db);
    await mongoose.connect(db.localhost);
    console.log(">>> DB conectada con éxito")
  } catch (error) {
    console.log(error);
  }
};