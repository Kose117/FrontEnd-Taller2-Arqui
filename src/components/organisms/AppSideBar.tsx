import * as React from "react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarRail } from "@/components/atoms/ui/sidebar"
import { NavGroup } from "@/components/molecules/side-navigation/NavGroup"
import { NavUser } from "@/components/molecules/side-navigation/Nav-user"
import { sidebarData } from "@/data/sidebar-data"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            
            <SidebarContent>
                {sidebarData.navGroups.map((group) => (
                    <NavGroup key={group.title} title={group.title} items={group.items} />
                ))}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={sidebarData.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
