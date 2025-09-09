import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log("ket noi DB thanh cong");
  } catch (error) {
    console.error("loi khi ket noi DB", error);
    process.exit(1);
  }
};
