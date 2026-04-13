import React from 'react'
import Table from './Table'
import Avatar from './Avatar'
import Badge from './Badge'

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

export default {
  title: 'Data Display/Table',
  component: Table,
}

export const Default = () => <Table columns={columns} data={data} caption="Users table" />
