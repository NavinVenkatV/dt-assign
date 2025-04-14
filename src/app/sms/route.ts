import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";


const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req: NextRequest) {
  console.log(process.env.TWILIO_ACCOUNT_SID)
  const { to, text } = await req.json();
  const number = `+${to.trim()}`;
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  try {
    const client = require('twilio')(accountSid, authToken);
    client.messages
      .create({
        body: text,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: number
      })
    return NextResponse.json({ message: "Sent Successfully" })
  } catch (e) {
    return NextResponse.json({ message: "Somthing went wrong " })
  }
}
