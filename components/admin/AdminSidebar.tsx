"use client"

import { redirect, usePathname } from 'next/navigation'
import React from 'react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarRail, SidebarTrigger } from '../ui/sidebar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { ChevronsUpDown, GalleryVerticalEnd, Settings } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import { Separator } from '../ui/separator'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '../ui/breadcrumb'
import { UserButton, useUser } from '@clerk/nextjs'

interface Props {
    children: React.ReactNode
}

const AdminSidebar = ({ children } : Props) => {
    const { isSignedIn, user, isLoaded } : any = useUser();
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
                isActive: (pathname == "/admin/listings") || (pathname == "/creat-listing") ? true : false,
                items: [
                    {
                      title: "My Listings",
                      url: "/admin/listings",
                      isActive: pathname == "/admin/listings" ? true : false,
                    },
                    {
                        title: "Create Listings",
                        url: "/admin/create-listing",
                        isActive: pathname == "/admin/create-listing" ? true : false
                    },
                ]
            },
            {
                title: "Teams",
                url: "#",
                isActive: (pathname == "/admin/teams") || (pathname == "/creat-team") ? true : false,
                items: [
                    {
                      title: "My Team",
                      url: "/admin/teams",
                      isActive: pathname == "/admin/teams" ? true : false,
                    },
                    {
                        title: "Add Team Member",
                        url: "/admin/create-team",
                        isActive: pathname == "/admin/create-team" ? true : false
                    },
                ]
            },
            {
                title: "Partners",
                url: "#",
                isActive: (pathname == "/admin/partners") || (pathname == "/creat-partner") ? true : false,
                items: [
                    {
                      title: "My Partners",
                      url: "/admin/partners",
                      isActive: pathname == "/admin/partners" ? true : false,
                    },
                    {
                        title: "Add Partner",
                        url: "/admin/create-partner",
                        isActive: pathname == "/admin/create-partner" ? true : false
                    },
                ]
            },
            {
                title: "Blogs",
                url: "#",
                isActive: (pathname == "/admin/blogs") || (pathname == "/creat-blog") ? true : false,
                items: [
                    {
                      title: "My Blogs",
                      url: "/admin/partners",
                      isActive: pathname == "/admin/blogs" ? true : false,
                    },
                    {
                        title: "Add Blog Post",
                        url: "/admin/create-blog",
                        isActive: pathname == "/admin/create-blog" ? true : false
                    },
                ]
            },
        ],
    }

    if (!isSignedIn) {
        redirect('/sign-in')
    }
    
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader className="bg-zinc-900 text-slate-300">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuButton
                                        size="lg"
                                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-zinc-700 hover:text-zinc-300"
                                    >
                                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                            <GalleryVerticalEnd className="size-4" />
                                        </div>
                                        <div className="flex flex-col gap-0.5 leading-none">
                                            <span className="font-semibold">{`${user?.firstName || "User"}`}</span>
                                        </div>
                                        <ChevronsUpDown className="ml-auto" />
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-[--radix-dropdown-menu-trigger-width]"
                                    align="start"
                                >
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent className="bg-zinc-900 text-slate-300">
                    {data.navMain.map((item) => (
                        <SidebarGroup key={item.title}>
                            <SidebarGroupLabel className="text-slate-400">{item.title}</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {item.items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild isActive={item.isActive}>
                                                <Link href={item.url}>{item.title}</Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    ))}
                    <SidebarGroup>
                        <SidebarGroupLabel className="text-zinc-500">Settings</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem className="flex cursor-pointer">
                                    <Link
                                        href={"/admin/home-settings/67a3061e212ec2b37e6bb299"}
                                        className={buttonVariants({
                                            variant: "default",
                                            className: "align-middle"
                                        })}
                                    >
                                        <Settings className="mr-2 h-4 w-4" />
                                        Manage Home Page
                                    </Link>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarRail />
            </Sidebar>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <div className="flex w-full justify-between align-middle">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        {`Welcome back, 👋 ${user?.firstName || "User"}`}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <Link
                            href={"/admin/home-settings/67a3061e212ec2b37e6bb299"}
                            className={buttonVariants({
                                variant: "default",
                                className: "align-middle"
                            })}
                        >
                            <Settings className="mr-2 h-4 w-4" />
                            Manage Home Page
                        </Link>

                        <UserButton />
                    </div>
                </header>
                {children}
            </SidebarInset>
        </SidebarProvider>
    )
}

export default AdminSidebar