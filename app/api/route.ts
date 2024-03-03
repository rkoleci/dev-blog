import { NextRequest, NextResponse } from 'next/server'
const fs = require('fs')
const users = require('data/users1.json')

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email')

  const usersJson = JSON.parse(users)
  usersJson.push({
    email,
  })

  fs.writeFileSync('data/users1.json', JSON.stringify({ users: usersJson }, null, 4))

  return NextResponse.json({
    email,
  })
}
