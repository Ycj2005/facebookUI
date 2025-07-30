import ConnectionDB from "@/DB/Connection";
import UserModel from "@/DB/Models/UserModel";
import { NextResponse } from "next/server";

ConnectionDB();

export async function POST(req) {
    try {
        const { fname, lname, uname, date, email, password, confpassword } = await req.json();
        const res = await UserModel.create({ fname, lname, uname, date, email, password, confpassword });
        return NextResponse.json({ status: 200, msg: "your data is posted !!", data: res });
    }
    catch (error) {
        return NextResponse.json({ status: 500, msg: "something error !!", error: error });
    }
}


export async function GET(request) {
    try {
        const data = await UserModel.find({});
        NextResponse.json({ status: 200, msg: "your data is find !!", data: data });
    }
    catch (error) {
        NextResponse.json({ status: 500, msg: "your data can't find !!", error: error });
    }
}
