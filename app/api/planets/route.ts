import { promises as fs } from 'fs'
import { NextResponse } from 'next/server'
import path from 'path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'data', 'planets.json')
  const fileContents = await fs.readFile(filePath, 'utf-8')
  const stars = JSON.parse(fileContents)

  return NextResponse.json(stars)
}
