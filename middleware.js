import { NextResponse } from "next/server"


export function middleware(request) {

    console.log('------middle',)

    return NextResponse.next()
}