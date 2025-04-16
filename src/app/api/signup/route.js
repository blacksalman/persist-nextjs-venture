// import { NextResponse } from 'next/server';
// import pool from '../../lib/db';
// import { setupDatabase, checkTablesExist } from '../../lib/setup-db';

// export async function POST(req) {
//   try {
//     // Check if tables exist
//     const tablesExist = await checkTablesExist();
//     if (!tablesExist) {
//       await setupDatabase();
//       console.log('Tables created during signup initialization');
//     }

//     const { name, email, phone, linkedinUrl } = await req.json();

//     if (!name || !email || !phone || !linkedinUrl) {
//       return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
//     }

//     const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
//     if (result.rows.length > 0) {
//       return NextResponse.json({ message: 'User already exists' }, { status: 400 });
//     }

//     await pool.query(
//       'INSERT INTO users (name, email, phone, linkedin_url) VALUES ($1, $2, $3, $4)',
//       [name, email, phone, linkedinUrl]
//     );

//     return NextResponse.json({ message: 'Signup successful' }, { status: 201 });
//   } catch (error) {
//     console.error('Error during signup:', error);
//     return NextResponse.json({ message: 'Failed to sign up' }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import pool from '../../lib/db';
import { setupDatabase, checkTablesExist } from '../../lib/setup-db';

export async function POST(req) {
  try {
    // Check if tables exist on Neon
    const tablesExist = await checkTablesExist();
    if (!tablesExist) {
      await setupDatabase();
      console.log('Tables created during signup initialization on Neon');
    }

    const { name, email, phone, linkedinUrl } = await req.json();

    if (!name || !email || !phone || !linkedinUrl) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length > 0) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    await pool.query(
      'INSERT INTO users (name, email, phone, linkedin_url) VALUES ($1, $2, $3, $4)',
      [name, email, phone, linkedinUrl]
    );

    return NextResponse.json({ message: 'Signup successful' }, { status: 201 });
  } catch (error) {
    console.error('Error during signup on Neon:', error);
    return NextResponse.json({ message: 'Failed to sign up' }, { status: 500 });
  }
}