import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"

import { auth } from "@/lib/auth"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import SidebarUser from "@/components/sidebar/user"

const getSession = createServerFn({ method: "GET" }).handler(async () => {
  const request = getRequest()
  return await auth.api.getSession({
    headers: request.headers,
  })
})

export const Route = createFileRoute("/(dashboard)")({
  loader: async () => {
    const session = await getSession()

    if (!session?.user) {
      throw redirect({
        to: "/",
      })
    }

    return { session }
  },
  component: Layout,
})

function Layout() {
  const { session } = Route.useLoaderData()

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader />
        <SidebarContent>{/* Content Goes Here */}</SidebarContent>
        <SidebarFooter>
          <SidebarUser user={session.user} />
        </SidebarFooter>
      </Sidebar>
      <main>
        <SidebarTrigger className="bg-sidebar absolute m-2 cursor-pointer border" />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
