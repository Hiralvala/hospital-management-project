import User from "@/lib/User";
import { connectDB } from "@/models/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import nodemailer from 'nodemailer';
type Data = {
    success: boolean;
    message?: string;
    error?: string;
  };

export async function POST(req: NextRequest) {
  try {
    await connectDB("userData");
    const body = await req.json();
    const { name, email, phoneNumber, password, role } = body;

    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already exists" },
        { status: 400 }
      );
    }

    const userName = `${name
      .toLowerCase()
      .replace(/\s/g, "")}_${uuidv4().substring(0, 8)}`;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      userName,
      email,
      phoneNumber,
      passwordHash,
      role,
    });

    await newUser.save();

    try {
      await sentRegistrationEmail(email, name, userName, password, role);
    } catch (error) {
      console.log("Error sending mail :", error);
      return NextResponse.json(
        {
          success: false,
          message: "Registartion successfull, But error in sending mail",
        },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { success: true, message: "Registration successfull! Check you mail" },
      { status: 201 }
    );
  } catch (error: any) {
    console.log("Registration error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Registration failed" },
      { status: 500 }
    );
  }
}

async function sentRegistrationEmail(
  email: string,
  name: string,
  username: string,
  password: string,
  role: string
) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'keanu.ankunding88@ethereal.email',
        pass: 'pbR74x6mk72qEKZPAj'
    }
  });

  const mailOptions = {
    from: "valahiral563@gmail.com",
    to: email,
    subject: "Welcome to our platform",
    html: `
      <p>Dear ${name}</p>
      <p>Dear ${name},</p>
      <p>Thank you for registering with our platform!</p>
      <p>Here are your login details:</p>
      <ul>
        <li>Username: ${username}</li>
        <li>Password: ${password}</li>
        <li>Role: ${role}</li>
      </ul>
      <p>We recommend that you change your password after logging in for the first time.</p>
      <p>Best regards,<br/>The Our Team</p>
        `,
  };

  await transporter.sendMail(mailOptions);
}
