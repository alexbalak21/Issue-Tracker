import {Button} from "@radix-ui/themes"
import {MdDelete} from "react-icons/md"
import {RiDeleteBin6Line} from "react-icons/ri"

function DeleteIssueButton({issueId}: {issueId: number}) {
  return (
    <Button color="red" size="3">
      Delete Issue <RiDeleteBin6Line />
    </Button>
  )
}

export default DeleteIssueButton
