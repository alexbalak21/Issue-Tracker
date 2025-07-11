import {PropsWithChildren} from "react"

function ErrorMessage({children}: PropsWithChildren) {
  if (!children) return null
  return <p className="text-red-500">{children}</p>
}

export default ErrorMessage
