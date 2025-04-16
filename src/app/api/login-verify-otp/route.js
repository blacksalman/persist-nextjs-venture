import { NextResponse } from 'next/server';
import pool from '../../lib/db';

export async function POST(req) {
  const { email, otp } = await req.json();

  if (!email || !otp) {
    return NextResponse.json({ message: 'Email and OTP are required' }, { status: 400 });
  }

  try {
    const otpResult = await pool.query('SELECT * FROM otps WHERE email = $1 AND otp = $2', [email, otp]);
    const otpDoc = otpResult.rows[0];

    if (!otpDoc) {
      return NextResponse.json({ message: 'Invalid OTP' }, { status: 400 });
    }

    if (new Date(otpDoc.expires_at) < new Date()) {
      await pool.query('DELETE FROM otps WHERE id = $1', [otpDoc.id]);
      return NextResponse.json({ message: 'OTP has expired. Please request a new one.' }, { status: 400 });
    }

    const userResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = userResult.rows[0];

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    await pool.query('DELETE FROM otps WHERE id = $1', [otpDoc.id]);

    return NextResponse.json({
      message: 'OTP verified successfully',
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        linkedin_url: user.linkedin_url,
      },
    }, { status: 200 });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json({ message: 'Failed to verify OTP' }, { status: 500 });
  }
}