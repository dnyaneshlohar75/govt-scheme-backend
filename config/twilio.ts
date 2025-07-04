import dotenv from "dotenv";
dotenv.config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

import { Twilio } from 'twilio';

export const client = new Twilio(accountSid, authToken);
