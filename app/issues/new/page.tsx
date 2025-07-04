"use client"

import {Button, TextField} from "@radix-ui/themes"
import {Label} from "@radix-ui/react-label"
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import {useForm, Controller} from "react-hook-form"
import axios from "axios"
import {useRouter} from "next/navigation"
import {zodResolver} from "@hookform/resolvers/zod"
import {createIssueSchema} from "@/app/schemas/validationSchemas"
import {z} from "zod"

type IssueForm = z.infer<typeof createIssueSchema>

function NewIssuePage() {
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IssueForm>({resolver: zodResolver(createIssueSchema)})
  return (
    <form
      className="max-w-2xl mx-auto mt-16"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data)
        router.push("/issues")
      })}>
      <Label htmlFor="title">Title</Label>
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      <TextField.Root className="mb-4" id="title" placeholder="Title" {...register("title")} />

      <Label htmlFor="description">Description</Label>
      {errors.description && <p className="text-red-500">{errors.description.message}</p>}
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
