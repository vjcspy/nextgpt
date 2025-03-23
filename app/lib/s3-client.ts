// lib/s3Client.ts
import { S3Client } from "@aws-sdk/client-s3";

export const s3Region = "ap-southeast-1";
const s3Client = new S3Client({
  region: s3Region,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export default s3Client;
