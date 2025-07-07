import {Badge} from "@radix-ui/themes"

const allBadgeColors = [
  "gray",
  "red",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "green",
  "grass",
  "lime",
  "yellow",
  "amber",
  "orange",
  "brown",
  "bronze",
  "gold",
  "mint",
  "sky",
] as const

function EditPage() {
  return (
    <div>
      <h2 className="text-center mt-3 mb-5">Edit Page - Badge Color Showcase</h2>
      <div className="flex flex-wrap gap-2 mt-4 ms-4">
        {allBadgeColors.map((color) => (
          <Badge key={color} color={color} size="3">
            {color}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default EditPage
