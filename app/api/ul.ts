import s3Client, { s3Region } from "@/app/lib/s3-client";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

export default async function ulHandler(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  try {
    const filename =
      req.nextUrl.searchParams.get("filename") || "default-file.bin";
    const contentType =
      req.headers.get("content-type") || "application/octet-stream";

    const arrayBuffer = await req.arrayBuffer(); // Đọc binary
    const buffer = Buffer.from(arrayBuffer);
    const bucket = "brandwebsite";
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: filename,
      Body: buffer,
      ContentType: contentType,
    });

    await s3Client.send(command);

    const fileUrl = `https://${bucket}.s3.${s3Region}.amazonaws.com/${filename}`;

    return NextResponse.json({ message: "Upload successful", url: fileUrl });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: "Upload failed", details: err.message },
      { status: 500 },
    );
  }
}
