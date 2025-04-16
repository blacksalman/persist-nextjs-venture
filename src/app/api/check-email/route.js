import { NextResponse } from 'next/server';
import pool from '../../lib/db';

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (user) {
      return NextResponse.json({ exists: true, message: 'Email found. Proceed to login.' }, { status: 200 });
    } else {
      return NextResponse.json({ exists: false, message: 'Email not found. Please sign up.' }, { status: 200 });
    }
  } catch (error) {
    console.error('Error checking email:', error);
    return NextResponse.json({ message: 'Failed to check email' }, { status: 500 });
  }
}