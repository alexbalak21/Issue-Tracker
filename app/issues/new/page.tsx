"use client"

import {Button, Callout, Spinner, TextField} from "@radix-ui/themes"
import {Label} from "@radix-ui/react-label"
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import {useForm, Controller} from "react-hook-form"
import axios from "axios"
import {useRouter} from "next/navigation"
import {zodResolver} from "@hookform/resolvers/zod"
import {createIssueSchema} from "@/app/schemas/validationSchemas"
import {z} from "zod"
import ErrorMessage from "@/app/components/ErrorMessage"
import LoadingSpinner from "@/app/components/LoadingSpinner"
import {useState} from "react"

type IssueForm = z.infer<typeof createIssueSchema>

function NewIssuePage() {
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IssueForm>({resolver: zodResolver(createIssueSchema)})

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true)
      await axios.post("/api/issues", data)
      router.push("/issues")
    } catch (error) {
      setError("An unexpected error occurred.")
    } finally {
      setIsSubmitting(false)
    }
  })
  return (
    <div className="max-w-2xl mx-auto">
      {error && (
        <Callout.Root color="red" className="mb-4">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="mt-16" onSubmit={onSubmit}>
        <Label htmlFor="title">Title</Label>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <TextField.Root className="mb-4 border dark:border-green-500" id="title" placeholder="Title" {...register("title")} />

        <Label htmlFor="description">Description</Label>
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({field}) => <SimpleMDE placeholder="Description" id="description" className="mb-4" {...field} />}
        />
        <Button disabled={isSubmitting}>Submit New issue {isSubmitting && <LoadingSpinner />}</Button>
      </form>
    </div>
  )
}

export default NewIssuePage
