import AdminSidebar from '@/components/admin/AdminSidebar'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
  return (
    <main className="mx-auto w-full relative">
        <AdminSidebar>
            {children}
        </AdminSidebar>
    </main>
  )
}

export default AdminLayout