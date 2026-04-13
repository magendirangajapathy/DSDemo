import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Table from '../components/Table'
import Avatar from '../components/Avatar'
import Badge from '../components/Badge'

export default {
  title: 'Examples/Dashboard',
}

const columns = [
  {
    key: 'user',
    header: 'User',
    cell: (row) => (
      <div className="flex items-center gap-3">
        <Avatar name={row.name} size="sm" />
        <div>
          <div className="text-sm font-medium">{row.name}</div>
          <div className="text-xs text-gray-500">{row.email}</div>
        </div>
      </div>
    ),
  },
  { key: 'role', header: 'Role' },
  {
    key: 'status',
    header: 'Status',
    cell: (row) => <Badge variant={row.status === 'Active' ? 'success' : 'destructive'}>{row.status}</Badge>,
  },
]

const data = [
  { name: 'Jane Cooper', email: 'jane.cooper@example.com', role: 'Developer', status: 'Active' },
  { name: 'John Smith', email: 'john.smith@example.com', role: 'Designer', status: 'Inactive' },
  { name: 'Alex Johnson', email: 'alex.johnson@example.com', role: 'Product', status: 'Active' },
]

export const Default = () => (
  <Layout navItems={[{ label: 'Home', href: '#' }, { label: 'Projects', href: '#' }]} sidebarItems={[{ label: 'Overview', href: '#' }, { label: 'Team', href: '#' }, { label: 'Settings', href: '#' }]}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card title="Total users" subtitle="Last 24 hours">
        <div className="text-2xl font-bold">1,234</div>
      </Card>

      <Card title="Active projects" subtitle="Now">
        <div className="text-2xl font-bold">23</div>
      </Card>

      <Card title="Errors" subtitle="Today">
        <div className="text-2xl font-bold text-red-600">2</div>
      </Card>
    </div>

    <Card title="Users" subtitle="Recent">
      <Table columns={columns} data={data} caption="Users table" />
    </Card>
  </Layout>
)
