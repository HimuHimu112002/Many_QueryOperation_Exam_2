import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
export async function POST(req, res){
    try{
        const prisma = new PrismaClient()
        let result = await prisma.StudentRagistration.createMany({
            data:[
                {first_name: "Himu" , last_name: "C", age: "1", grade: "A", courses: "N"},
                {first_name: "Himu" , last_name: "C", age: "1", grade: "A", courses: "N"},
                {first_name: "Himu" , last_name: "C", age: "1", grade: "A", courses: "N"}, 
            ]
        })
        return NextResponse.json({status:"success", data: result})
    }catch(e){
        return NextResponse.json({status:"fail", data: e.toString()})
    }
}