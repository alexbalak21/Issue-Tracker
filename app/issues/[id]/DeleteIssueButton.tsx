"use client"

import {AlertDialog, Button} from "@radix-ui/themes"
import axios from "axios"
import {useRouter} from "next/navigation"
import {MdCancel} from "react-icons/md"
import {RiDeleteBin6Line} from "react-icons/ri"

function DeleteIssueButton({issueId}: {issueId: number}) {
  const router = useRouter()
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red" size="3">
          <RiDeleteBin6Line /> Delete Issue
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title className="text-center pb-7">Delete Issue</AlertDialog.Title>
        <AlertDialog.Description className="text-center">
          Are you sure you want to delete this issue? <br /> This action cannot be undone.
        </AlertDialog.Description>
        <div className="flex justify-center gap-40 mt-7">
          <AlertDialog.Action>
            <Button
              variant="solid"
              color="red"
              size="3"
              onClick={async () => {
                await axios.delete(`/api/issues/${issueId}`)
                router.push("/issues")
              }}>
              <RiDeleteBin6Line /> Delete
            </Button>
          </AlertDialog.Action>
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray" size="3">
              <MdCancel /> Cancel
            </Button>
          </AlertDialog.Cancel>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}

export default DeleteIssueButton
