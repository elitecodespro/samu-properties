import AdminSidebar from '@/components/admin/AdminSidebar'
import { ThemeProvider } from '@/components/theme-provider'
import React, { Suspense, useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <main className="mx-auto w-full relative">
        <AdminSidebar>  
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </AdminSidebar>
      </main>
    </ThemeProvider>
  )
}

export default AdminLayout