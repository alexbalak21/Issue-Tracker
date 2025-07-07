import prisma from "@/prisma/client"
import IssueForm from "../../_components/IssueForm"
import {notFound} from "next/navigation"

interface Props {
  params: {
    id: string
  }
}

async function EditIssuePage({params}: Props) {
  const {id} = await params
  const issue = await prisma.issue.findUnique({
    where: {id: parseInt(id)},
  })
  if (!issue) notFound()

  return (
    <div className="max-w-5xl mx-auto px-1.5 mt-5">
      <IssueForm issue={issue} />
    </div>
  )
}

export default EditIssuePage
