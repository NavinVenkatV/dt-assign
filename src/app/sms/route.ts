import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req: NextRequest) {
  const { to, text } = await req.json();
  const number = `+${to.trim()}`;
  const accountSid = 'AC24965f43d2f864cde1e406c01798a149';
const authToken = 'f25faa82b3acd488ad976774108bcb20';
const client = require('twilio')(accountSid, authToken);
client.messages
    .create({
        body: text,
        from: '+17156465239',
        to: number
    })
    return NextResponse.json({message : "Sent Successfully"})
}
