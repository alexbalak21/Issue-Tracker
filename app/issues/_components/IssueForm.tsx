"use client"

import ErrorMessage from "@/app/components/ErrorMessage"
import LoadingSpinner from "@/app/components/LoadingSpinner"
import {Issue} from "@/app/generated/prisma"
import {issueSchema} from "@/app/schemas/validationSchemas"
import {zodResolver} from "@hookform/resolvers/zod"
import {Label} from "@radix-ui/react-label"
import {Button, Callout, TextField} from "@radix-ui/themes"
import axios from "axios"
import "easymde/dist/easymde.min.css"
import dynamic from "next/dynamic"
import {useRouter} from "next/navigation"
import {useState} from "react"
import {Controller, useForm} from "react-hook-form"
import {FaSave} from "react-icons/fa"
import {z} from "zod"

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-105">
      <LoadingSpinner />
    </div>
  ),
})

type IssueFormData = z.infer<typeof issueSchema>

function IssueForm({issue}: {issue?: Issue}) {
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IssueFormData>({resolver: zodResolver(issueSchema)})
  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true)
      if (issue) await axios.patch(`/api/issues/${issue.id}`, data)
      else await axios.post("/api/issues", data)
      router.push("/issues")
    } catch (error) {
      setError("An unexpected error occurred.")
    } finally {
      setIsSubmitting(false)
    }
  })
  return (
    <>
      {" "}
      {error && (
        <Callout.Root color="red" className="mb-4">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form onSubmit={onSubmit}>
        <Label htmlFor="title">Title</Label>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <TextField.Root
          defaultValue={issue?.title}
          className="mb-4 border border-gray-100 dark:border-gray-100"
          style={{fontSize: "1.4rem"}}
          id="title"
          placeholder="Title"
          {...register("title")}
        />
        <Label htmlFor="description">Description</Label>
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Controller
          name="description"
          defaultValue={issue?.description}
          control={control}
          render={({field}) => <SimpleMDE placeholder="Description" id="description" className="mb-4 " {...field} />}
        />

        <Button size="3" color={issue ? "indigo" : "green"} disabled={isSubmitting}>
          {issue ? "Update Issue" : "Create Issue"} <FaSave /> {isSubmitting && <LoadingSpinner />}
        </Button>
      </form>
    </>
  )
}

export default IssueForm
