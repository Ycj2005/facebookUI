import ConnectionDB from "@/DB/Connection";
import UserModel from "@/DB/Models/UserModel";
import { NextResponse } from "next/server";

ConnectionDB();

export async function PATCH(request, context) {
    try {
        const id = context.params.id;
        const update = await request.json();
        const res = await UserModel.findByIdAndUpdate(id, update);
        return NextResponse.json({ status: 200, msg: "data updated !", data: res });
    }
    catch (error) {
        return NextResponse.json({ status: 500, msg: "data not updated",error });
    }
}

export async function DELETE(request, context) {
    try {
        const id = context.params.id;
        const res = await UserModel.findByIdAndDelete(id);
        return NextResponse.json({ status: 200, msg: "your data is deleted !" });
    }
    catch(error){
        return NextResponse.json({status: 500, msg:"your data is not deleted", error});
    }
}

export async function GET(request, context) {
    try {
        const id = context.params.id;
        const res = await UserModel.findById(id);
        return NextResponse.json({ status: 200, msg: "your data !", data: res });
    }
    catch(error){
        return NextResponse.json({status: 500, msg:"your data is not get", error});
    }
}