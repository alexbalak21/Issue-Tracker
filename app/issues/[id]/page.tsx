import IssueStatusBadge from "@/app/components/IssueStatusBadge"
import prisma from "@/prisma/client"
import {Card, Heading, Text} from "@radix-ui/themes"
import {notFound} from "next/navigation"
import ReactMarkdown from "react-markdown"

interface Props {
  params: {id: string}
}

async function IssueDetailsPage({params}: Props) {
  const {id} = await params
  if (isNaN(parseInt(id))) notFound()
  const issue = await prisma.issue.findUnique({where: {id: parseInt(id)}})

  if (!issue) notFound()

  return (
    <div className="max-w-5xl mx-auto px-1.5 mt-5">
      <Heading>{issue.title}</Heading>
      <div className="flex justify-between ps-1">
        <IssueStatusBadge status={issue.status} />
        <Text className="pe-1">{issue.createdAt.toDateString()}</Text>
      </div>
      <Card className="mt-5">
        <div className="prose">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </div>
      </Card>
    </div>
  )
}

export default IssueDetailsPage
