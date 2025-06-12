import { connectDb } from "@/database";
import Home from "@/models/Home";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    await connectDb();
    const extractData = await Home.find({});
    if (extractData) {
      return NextResponse.json({
        success: "true",
        data: extractData,
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
