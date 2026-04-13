import React, { useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Switch from '../components/Switch'
import Select from '../components/Select'
import Input from '../components/Input'

export default {
  title: 'Examples/Settings',
}

export const Default = () => {
  const [notifications, setNotifications] = useState(true)
  const [theme, setTheme] = useState('light')
  const [username, setUsername] = useState('janedoe')

  return (
    <Layout navItems={[{ label: 'Home', href: '#' }]} sidebarItems={[{ label: 'Profile', href: '#' }, { label: 'Account', href: '#' }]}>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <Card title="Account Settings">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Notifications</div>
                <div className="text-sm text-gray-500">Receive email updates and product news</div>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>

            <div>
              <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
          </div>
        </Card>

        <Card title="Appearance">
          <div className="space-y-4">
            <Select
              label="Theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              options={[{ label: 'Light', value: 'light' }, { label: 'Dark', value: 'dark' }, { label: 'System', value: 'system' }]}
            />
          </div>
        </Card>
      </div>
    </Layout>
  )
}
