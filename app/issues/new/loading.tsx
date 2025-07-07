import Skeleton from "react-loading-skeleton"

function loading() {
  return (
    <div className="max-w-2xl mx-auto">
      <Skeleton height={50} className="mt-16 mb-4" />
      <Skeleton height={300} />
    </div>
  )
}

export default loading
