import { StreamClient} from "@stream-io/node-sdk";
import * as dotenv from 'dotenv';

dotenv.config();  

const apiKey = process.env.apiKey;
const apiSecret = process.env.apiSecret;

export const client = new StreamClient(apiKey, apiSecret);
