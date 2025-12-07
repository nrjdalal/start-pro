import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/(dashboard)/x")({
  component: Page,
})

function Page() {
  return <div>X Page</div>
}
