import { NextRequest, NextResponse } from "next/server"
const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
    apiKey: "2e10154d",
    apiSecret: "t1vwszb0ATG66qaH"
})


export async function POST(req: NextRequest) {
    const { to, text } = await req.json();
    
    if(!to || !text) {
        return NextResponse.json({message: "Invalid Input"}, {status: 400})
    }

    try {
        const from = "Vonage APIs"
        await vonage.sms.send({ to, from, text })
        
        // Store the message in the database
        // await prisma.text.create({
        //     data : {
        //         text
        //     }
        // })

        return NextResponse.json({message: "Message sent successfully"})
    } catch(e) {
        console.error("Error sending SMS:", e)
        return NextResponse.json({message: "Something went wrong"}, {status: 500})
    }
}