import {Button} from "@radix-ui/themes"
import Link from "next/link"
import {BsPencilSquare} from "react-icons/bs"

function EditIssueButton({issueId}: {issueId: number}) {
  return (
    <Button variant="surface" size="3" className="me-2">
      <BsPencilSquare />
      <Link href={`/issues/${issueId}/edit`}> Edit Issue</Link>
    </Button>
  )
}

export default EditIssueButton
