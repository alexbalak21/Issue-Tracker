import {NextRequest, NextResponse} from "next/server"
import prisma from "@/prisma/client"
import {issueSchema} from "@/app/schemas/validationSchemas"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = issueSchema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), {status: 400})
  }

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  })
  return NextResponse.json(newIssue, {status: 201})
}

//PUT method
export async function PUT(request: NextRequest) {
  const body = await request.json()
  const validation = issueSchema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), {status: 400})
  }

  const {id} = body
  const updatedIssue = await prisma.issue.update({
    where: {id: parseInt(id)},
    data: {
      title: body.title,
      description: body.description,
    },
  })
  return NextResponse.json(updatedIssue, {status: 200})
}
