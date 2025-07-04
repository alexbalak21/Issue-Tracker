"use client"

import {Button, TextField} from "@radix-ui/themes"
import {Label} from "@radix-ui/react-label"
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import {useForm, Controller} from "react-hook-form"
import axios from "axios"
import {useRouter} from "next/navigation"

interface IssueForm {
  title: string
  description: string
}

function NewIssuePage() {
  const router = useRouter()
  const {register, control, handleSubmit} = useForm<IssueForm>()
  return (
    <form
      className="max-w-2xl mx-auto mt-16"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data)
        router.push("/issues")
      })}>
      <Label htmlFor="title">Title</Label>
      <TextField.Root className="mb-4" id="title" placeholder="Title" {...register("title")} />

      <Label htmlFor="description">Description</Label>
      <Controller
        name="description"
        control={control}
        render={({field}) => <SimpleMDE placeholder="Description" id="description" className="mb-4" {...field} />}
      />
      <Button>Submit New issue</Button>
    </form>
  )
}

export default NewIssuePage
