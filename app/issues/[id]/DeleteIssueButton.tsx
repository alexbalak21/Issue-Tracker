"use client"

import LoadingSpinner from "@/app/components/LoadingSpinner"
import {AlertDialog, Button} from "@radix-ui/themes"
import axios from "axios"
import {useRouter} from "next/navigation"
import {useState} from "react"
import {MdCancel} from "react-icons/md"
import {RiDeleteBin6Line} from "react-icons/ri"

function DeleteIssueButton({issueId}: {issueId: number}) {
  const router = useRouter()
  const [error, setError] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    try {
      setIsDeleting(true)
      await axios.delete(`/api/issues/${issueId}`)
      router.push("/issues")
    } catch (error) {
      setIsDeleting(false)
      setError(true)
    }
  }

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button disabled={isDeleting} color="red" size="3">
            <RiDeleteBin6Line /> Delete Issue
            {isDeleting && <LoadingSpinner />}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title className="text-center pb-7">Delete Issue</AlertDialog.Title>
          <AlertDialog.Description className="text-center">
            Are you sure you want to delete this issue? <br /> This action cannot be undone.
          </AlertDialog.Description>
          <div className="flex justify-center gap-40 mt-7">
            <AlertDialog.Action>
              <Button variant="solid" color="ruby" size="3" onClick={handleDelete}>
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
      {/* ERROR DIALOG */}
      <AlertDialog.Root open={error} onOpenChange={setError}>
        <AlertDialog.Content>
          <AlertDialog.Title className="text-center pb-7">Error</AlertDialog.Title>
          <AlertDialog.Description className="text-center">
            An error occurred while deleting the issue. <br /> Please try again later.
          </AlertDialog.Description>
          <div className="flex justify-center mt-7">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray" size="3" onClick={() => setError(false)}>
                <MdCancel /> Close
              </Button>
            </AlertDialog.Cancel>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  )
}

export default DeleteIssueButton
