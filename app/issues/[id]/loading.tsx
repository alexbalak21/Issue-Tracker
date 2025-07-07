import {Heading, Card} from "@radix-ui/themes"
import Skeleton from "react-loading-skeleton"

function loading() {
  return (
    <div className="max-w-5xl mx-auto px-1.5 mt-5">
      <Heading>
        <Skeleton />
      </Heading>
      <div className="flex justify-between ps-1 mt-3">
        <Skeleton width="5rem" />
        <Skeleton width="5rem" />
      </div>
      <Card className="mt-4 min-h-100">
        <Skeleton count={5} width="100%" />
      </Card>
    </div>
  )
}

export default loading
