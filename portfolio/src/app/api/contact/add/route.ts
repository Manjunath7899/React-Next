// app/api/contact/add/route.ts
import { connectDb } from "@/database";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectDb();
    const extractData = await request.json();

    const saveData = await Contact.create(extractData);

    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data saved successfully",
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong! Please try again",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong! Please try again",
      },
      { status: 500 }
    );
  }
}
