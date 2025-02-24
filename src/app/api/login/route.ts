import User from "@/lib/User";
import { connectDB } from "@/models/mongodb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    await connectDB("userData");
    const { userName, password, role } = await req.json();

    if (!userName || !password || !role) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ userName: userName, role: role });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid Username or Role" },
        { status: 401 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid password" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Login Successfull",
        user: {
          name: user.name,
          userName: userName,
          email: user.email,
          role: user.role,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Login failed" },
      { status: 500 }
    );
  }
}
