import prisma from "@/prisma/client"
import {notFound} from "next/navigation"

interface Props {
  params: {id: string}
}

async function IssueDetailsPage({params}: Props) {
  const {id} = await params
  if (isNaN(parseInt(id))) notFound()
  const issue = await prisma.issue.findUnique({where: {id: parseInt(id)}})

  if (!issue) notFound()

  return (
    <div>
      <h1>{issue.title}</h1>
      <p>{issue.description}</p>
      <p>Status: {issue.status}</p>
      <p>Created At: {issue.createdAt.toDateString()}</p>
    </div>
  )
}

export default IssueDetailsPage
