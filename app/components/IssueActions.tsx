import {Button} from "@radix-ui/themes"
import Link from "next/link"
import React from "react"

function IssueActions() {
  return (
    <div className="mt-5 mb-5">
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  )
}

export default IssueActions
