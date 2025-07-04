"use client"

import {Button, TextArea, TextField} from "@radix-ui/themes"
import {Label} from "@radix-ui/react-label"

function NewIssuePage() {
  return (
    <div className="max-w-2xl mx-auto mt-16">
      <Label htmlFor="title">Title</Label>
      <TextField.Root className="mb-4" id="title" placeholder="Title" />

      <Label htmlFor="description">Description</Label>
      <TextArea placeholder="Description" id="description" className="mb-4 h-50" />
      <Button>Submit New issue</Button>
    </div>
  )
}

export default NewIssuePage
