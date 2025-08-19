import React from "react"
import {Status} from "@prisma-generated/client"
import {Badge} from "@radix-ui/themes"

const statusMap: Record<Status, {label: string; color: "red" | "orange" | "yellow" | "sky" | "mint" | "purple"}> = {
  OPEN: {label: "Open", color: "red"},
  IN_PROGRESS: {label: "In Progress", color: "orange"},
  CLOSED: {label: "Closed", color: "mint"},
}

type IssueStatusBadgeProps = {
  status: Status
  size?: "1" | "2" | "3"
}

function IssueStatusBadge({status, size = "1"}: IssueStatusBadgeProps) {
  return (
    <Badge size={size} color={statusMap[status].color}>
      {statusMap[status].label}
    </Badge>
  )
}

export default IssueStatusBadge
