import path from 'path'
import { promises as fs } from 'fs'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('q')?.toLowerCase() || ''
  const filePath = path.join(process.cwd(), 'data', 'planets.json')
  const fileContents = await fs.readFile(filePath, 'utf-8')
  const planets = JSON.parse(fileContents)

  const results = planets.filter((star: { name: string }) => star.name.toLowerCase().includes(query))
  return NextResponse.json(results)
}
