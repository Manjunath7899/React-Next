import { connectDb } from "@/database";
import About from "@/models/About";
import Home from "@/models/Home";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    await connectDb();
    const extractData = await request.json();
    const {
      _id,
      aboutme,
      noofprojects,
      yearofexperience,
      noofclients,
      skills,
    } = extractData;
    if (!_id) {
      return NextResponse.json({
        success: false,
        message: "Document ID is required for updating.",
      });
    }
    const updatedHome = await About.findOneAndUpdate(
      { _id: _id },
      {
        aboutme,
        noofprojects,
        yearofexperience,
        noofclients,
        skills,
      },
      { new: true, runValidators: true }
    );
    if (!updatedHome) {
      return NextResponse.json({
        success: false,
        message: "No document found with this ID.",
      });
    }
    return NextResponse.json({
      success: true,
      message: "Document updated successfully.",
      data: updatedHome,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      messsage: "Something went wrong! please try again",
    });
  }
}
