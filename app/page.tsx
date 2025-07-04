import {Button} from "@radix-ui/themes"
import Link from "next/link"

function Home() {
  return (
    <div className="mt-5 mx-5">
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  )
}

export default Home
