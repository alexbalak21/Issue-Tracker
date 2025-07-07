"use client"

import ErrorMessage from "@/app/components/ErrorMessage"
import LoadingSpinner from "@/app/components/LoadingSpinner"
import {createIssueSchema} from "@/app/schemas/validationSchemas"
import {zodResolver} from "@hookform/resolvers/zod"
import {Label} from "@radix-ui/react-label"
import {Button, Callout, TextField} from "@radix-ui/themes"
import axios from "axios"
import "easymde/dist/easymde.min.css"
import dynamic from "next/dynamic"
import {useRouter} from "next/navigation"
import {useState} from "react"
import {Controller, useForm} from "react-hook-form"
import {z} from "zod"

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-105">
      <LoadingSpinner />
    </div>
  ),
})

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
        <TextField.Root className="mb-4 border border-gray-100 dark:border-gray-100" id="title" placeholder="Title" {...register("title")} />
        <Label htmlFor="description">Description</Label>
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Controller
          name="description"
          control={control}
          render={({field}) => <SimpleMDE placeholder="Description" id="description" className="mb-4 " {...field} />}
        />

        <Button disabled={isSubmitting}>Submit New issue {isSubmitting && <LoadingSpinner />}</Button>
      </form>
    </div>
  )
}

export default NewIssuePage
