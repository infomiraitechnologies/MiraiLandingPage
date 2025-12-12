import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Mirai Web" <${process.env.EMAIL_USER}>`,
    to: "infomiraitechnologies@gmail.com",
    subject: "Nuevo contacto desde Mirai",
    html: `
      <h3>Nuevo contacto</h3>
      <p><b>Nombre:</b> ${data.name}</p>
      <p><b>Empresa:</b> ${data.company}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Mensaje:</b><br/>${data.message}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
