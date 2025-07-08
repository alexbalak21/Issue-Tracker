import {issueSchema} from "@/app/schemas/validationSchemas"
import prisma from "@/prisma/client"
import {NextRequest, NextResponse} from "next/server"

export async function PATCH(request: NextRequest, {params}: {params: {id: string}}) {
  const body = await request.json()
  const validation = issueSchema.safeParse(body)
  if (!validation.success) {
    return NextResponse.json(JSON.stringify(validation.error.format()), {status: 400})
  }
  const {id} = await params
  const issue = await prisma.issue.findUnique({where: {id: parseInt(id)}})
  if (!issue) {
    return NextResponse.json(JSON.stringify({error: "Issue not found"}), {status: 404})
  }
  const updatedIssue = await prisma.issue.update({
    where: {id: parseInt(id)},
    data: {
      title: body.title,
      description: body.description,
    },
  })
  return NextResponse.json(updatedIssue)
}

//Delete issue
export async function DELETE(request: NextRequest, {params}: {params: {id: string}}) {
  const {id} = await params
  const issue = await prisma.issue.findUnique({where: {id: parseInt(id)}})
  if (!issue) {
    return NextResponse.json(JSON.stringify({error: "Issue not found"}), {status: 404})
  }
  await prisma.issue.delete({where: {id: parseInt(id)}})
  return NextResponse.json({message: "Issue deleted successfully"}, {status: 200})
}
