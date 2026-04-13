import React from 'react'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'

export default {
  title: 'Examples/Product',
}

export const Default = () => (
  <div className="max-w-4xl mx-auto p-6">
    <Card title="Awesome Product" subtitle="Category: Widgets">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-56 h-56 bg-surface rounded-md flex items-center justify-center">Image</div>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">SuperWidget 3000</h2>
            <Badge variant="info">New</Badge>
          </div>
          <p className="mt-2 text-gray-600">A short description of the product highlighting main value props and features.</p>

          <div className="mt-4 flex items-center gap-3">
            <Button>Buy now</Button>
            <Button variant="ghost">Add to wishlist</Button>
          </div>
        </div>
      </div>
    </Card>
  </div>
)
