import { connectDb } from "@/database";
import User from "@/models/User";
import { compare, hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectDb();
    const { username, password } = await request.json();
    const checkUser = await User.findOne({ username });
    if (!checkUser) {
      return NextResponse.json({
        success: false,
        message: "User name is not present !Please try again",
      });
    }
    const hashPassword = await hash(checkUser.password, 12);
    const checkPassword = await compare(password, hashPassword);
    if (!checkPassword) {
      return NextResponse.json({
        success: false,
        message: "Wrong password. Please try again",
      });
    }
    return NextResponse.json({
      success: true,
      message: "Login successfull",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
