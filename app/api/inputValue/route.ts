
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { totalAmount, volumn } = body;

    if (!totalAmount || !volumn) {
      return new NextResponse("Missing info", { status: 400 });
    }

    const fillingInfo = await prisma.fillingInfo.create({
      data: {
        volumn,
        totalAmount,
      },
    });
    return NextResponse.json(fillingInfo);
  } catch (error: any) {
    console.log(error, "Registration Error");
    return new NextResponse("Internal Error", { status: 500 });
  } 
}