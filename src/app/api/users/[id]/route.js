import { NextResponse } from "next/server";
import {user} from "../../../util/db";

export function GET(request , content){
    console.log(content.params.id)
    const data = user;
    const userData = data.filter((item)=>item.id==content.params.id)
    return NextResponse.json(userData , {status : 200})
}