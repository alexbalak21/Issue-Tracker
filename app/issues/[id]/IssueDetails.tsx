import IssueStatusBadge from "@/app/components/IssueStatusBadge"
import {Issue} from "@/app/generated/prisma"
import {Card, Heading, Text} from "@radix-ui/themes"
import ReactMarkdown from "react-markdown"

function IssueDetails({issue}: {issue: Issue}) {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <div className="flex justify-between ps-1 mt-3">
        <IssueStatusBadge status={issue.status} size="3" />
        <Text className="pe-1">{issue.createdAt.toDateString()}</Text>
      </div>
      <Card className="mt-4 min-h-100">
        <div className="prose">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </div>
      </Card>
    </>
  )
}

export default IssueDetails
