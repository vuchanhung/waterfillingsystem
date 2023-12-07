
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (request) =>{
  try {
    const body = await request.json();
    const { totalAmount, volumn } = body;

    if (!totalAmount || !volumn) {
      return new NextResponse("Missing info", { status: 400 });
    }

    const newInfo = await prisma.fillingInfo.create({
      data: {
        volumn,
        totalAmount,
      },
    });
    return NextResponse.json(newInfo);
  } catch (err) {
    return NextResponse.json({message:'POST error',err},{status:500});
  } 
}

export const GET = async () =>{
  try {
    const info = await prisma.fillingInfo.findMany()

    return NextResponse.json(info);
  } catch (err) {
    return NextResponse.json({message:'GET error',err},{status:500});
  } 
}