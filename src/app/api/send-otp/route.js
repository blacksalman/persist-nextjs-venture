// import { NextResponse } from 'next/server';
// import pool from '../../lib/db';
// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export async function POST(req) {
//   const { email } = await req.json();

//   if (!email) {
//     return NextResponse.json({ message: 'Email is required' }, { status: 400 });
//   }

//   const otp = Math.floor(100000 + Math.random() * 900000).toString();
//   const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

//   try {
//     await pool.query('DELETE FROM otps WHERE email = $1', [email]);
//     await pool.query(
//       'INSERT INTO otps (email, otp, expires_at) VALUES ($1, $2, $3)',
//       [email, otp, expiresAt]
//     );

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Your OTP for Career Accelerator Signup',
//       text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
//     };
//     console.log('mailOption', mailOptions)

//     await transporter.sendMail(mailOptions);
//     return NextResponse.json({ message: 'OTP sent successfully' }, { status: 200 });
//   } catch (error) {
//     console.error('Error sending OTP:', error);
//     return NextResponse.json({ message: 'Failed to send OTP' }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import pool from '../../lib/db';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  try {
    await pool.query('DELETE FROM otps WHERE email = $1', [email]);
    await pool.query(
      'INSERT INTO otps (email, otp, expires_at) VALUES ($1, $2, $3)',
      [email, otp, expiresAt]
    );

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP for Career Accelerator Signup',
      text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'OTP sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending OTP on Neon:', error);
    return NextResponse.json({ message: 'Failed to send OTP' }, { status: 500 });
  }
}