import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request,{params}) =>{
  try {
    const {id} = params

    const info = await prisma.fillingInfo.findUnique({
        where:{
            id
        }
    })

    if(!info){
        return NextResponse.json(
            {message:'Information not found',err},
            {status:404}
        );
    }

    return NextResponse.json(info)
    
  } catch (err) {
    return NextResponse.json({message:'GET error',err},{status:500});
  } 
}

export const PATCH = async (request,{params})=>{
    try{
        const body = await request.json()
        const {volumn, totalAmount}=body

        const {id}= params

        const updateInfo = await prisma.fillingInfo.update({
            where:{
                id
            },
            data:{
                volumn,
                totalAmount
            }

        })
        if(!updateInfo){
            return NextResponse.json(
                {message:'Information not found',err},
                {status:404}
            );
        }

        return NextResponse.json(updateInfo)

    }catch(err){
        return NextResponse.json({message:'UPDATE error',err},{status:500});
    }
}

export const DELETE = async (request,{params})=>{
    try{
        const {id}= params

        await prisma.fillingInfo.delete({
            where:{
                id
            }

        })

        return NextResponse.json(updateInfo)

    }catch(err){
        return NextResponse.json({message:'DELETE error',err},{status:500});
    }
}