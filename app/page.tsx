import {Button} from "@radix-ui/themes"

function Home() {
  const colors = [
    "gray",
    "gold",
    "bronze",
    "brown",
    "yellow",
    "amber",
    "orange",
    "tomato",
    "red",
    "ruby",
    "crimson",
    "pink",
    "plum",
    "purple",
    "violet",
    "iris",
    "indigo",
    "blue",
    "cyan",
    "teal",
    "jade",
    "green",
    "grass",
    "lime",
    "mint",
    "sky",
  ] as const
  return (
    <div className="max-w-5xl mx-auto px-1.5 mt-5">
      <div className="prose w-full max-w-none">
        <h1>Home</h1>
        <div className="flex flex-wrap gap-2 justify-center w-full">
          {colors.map((color) => (
            <Button key={color} size="3" color={color}>
              {color}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
