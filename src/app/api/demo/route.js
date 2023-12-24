import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res){
    try{
        const prisma = new PrismaClient()
        let result = await prisma.User.create({
            data:{
                email: "aa@gmail.com",
                password: "1234556",
                profile:{
                    create:{
                        firstName: "MD",
                        lastName: "Himu1",
                        mobile: "123",
                        city: "A1"
                    }
                }
            }
        })
        return NextResponse.json({status:"success", data: result})
    }catch(e){
        return NextResponse.json({status:"fail", data: e.toString()})
    }
}