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
      <h2>Edit Page - Badge Color Showcase</h2>
      <div style={{display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem"}}>
        {allBadgeColors.map((color) => (
          <Badge key={color} color={color} size="2">
            {color}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default EditPage
