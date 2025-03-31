import { connectDb } from "@/database";
import Education from "@/models/Education";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectDb();
    const extractData = await request.json();
    const saveData = await Education.create(extractData);
    if (saveData) {
      return NextResponse.json({
        success: "true",
        message: "Data saved successfully",
      });
    } else {
      return NextResponse.json({
        success: "false",
        message: "Something went wrong! Please try again",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: "false",
      message: "Something went wrong! Please try again",
    });
  }
}
