import { usePathname } from 'next/navigation'
import React from 'react'
import { Sidebar, SidebarHeader, SidebarMenu, SidebarProvider } from '../ui/sidebar'

interface Props {
    children: React.ReactNode
}

const AdminSidebar = ({ children } : Props) => {
    const pathname = usePathname()
    
    const data = {
    
        navMain: [
            {
                title: "Admin Home",
                url: "#",
                isActive: (pathname == "/admin") || (pathname == "/") ? true : false,
                items: [
                    {
                      title: "Admin Dashboard",
                      url: "/admin",
                      isActive: pathname == "/admin" ? true : false,
                    },
                    {
                        title: "Back to Home Page",
                        url: "/",
                        isActive: pathname == "/" ? true : false
                    },
                ]
            },
            {
                title: "Listings",
                url: "#",
                isActive: (pathname == "/listings") || (pathname == "/creat-listing") ? true : false,
                items: [
                    {
                      title: "My Listings",
                      url: "/listings",
                      isActive: pathname == "/listings" ? true : false,
                    },
                    {
                        title: "Generate Blog Posts",
                        url: "/creat-listing",
                        isActive: pathname == "/creat-listing" ? true : false
                    },
                ]
            }
        ],
    }
    
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader className="bg-zinc-900 text-slate-300">
                    <SidebarMenu>
                        
                    </SidebarMenu>
                </SidebarHeader>
            </Sidebar>
        </SidebarProvider>
    )
}

export default AdminSidebar