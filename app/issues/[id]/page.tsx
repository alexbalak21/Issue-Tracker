import prisma from "@/prisma/client"
import {notFound} from "next/navigation"
import EditIssueButton from "./EditIssueButton"
import IssueDetails from "./IssueDetails"
import DeleteIssueButton from "./DeleteIssueButton"

interface Props {
  params: Promise<{id: string}>
}

export default async function IssueDetailsPage({params}: Props) {
  const {id} = await params

  if (isNaN(parseInt(id))) notFound()

  const issue = await prisma.issue.findUnique({
    where: {id: parseInt(id)},
  })

  if (!issue) notFound()

  return (
    <div className="max-w-5xl mx-auto px-1.5 mt-12">
      <IssueDetails issue={issue} />
      <div className="mt-15 flex justify-between">
        <EditIssueButton issueId={issue.id} />
        <DeleteIssueButton issueId={issue.id} />
      </div>
    </div>
  )
}
