import {useState} from "react"
import Editor from "react-simple-wysiwyg"

function App() {
  const [html, setHtml] = useState("my <b>HTML</b>")
  return <Editor value={html} onChange={(e) => setHtml(e.target.value)} />
}
