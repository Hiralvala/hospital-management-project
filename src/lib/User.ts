import mongoose, { Schema, model, models } from "mongoose";

interface IUser {
  name: string;
  userName: string;
  email: string;
  phoneNumber?: string;
  passwordHash: string;
  role: "patient" | "admin" | "doctor" | "receptionist";
  createAt: Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true, //prevent from whitespace
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phoneNumber: { type: String, required: false, default: null },
  passwordHash: { type: String, required: true },
  role: {
    type: String,
    enum: ["patient", "doctor", "admin", "receptionist"],
    default: "patient",
  },
  createAt: { type: Date, default: Date.now },
});

const User = models.User || model<IUser>("User", userSchema);
export default User;
