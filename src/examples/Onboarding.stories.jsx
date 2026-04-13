import React, { useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/Input'

export default {
  title: 'Examples/Onboarding',
}

function OnboardingFlow() {
  const [step, setStep] = useState(0)
  const [profile, setProfile] = useState({ name: '', email: '' })

  const next = () => setStep((s) => Math.min(2, s + 1))
  const prev = () => setStep((s) => Math.max(0, s - 1))

  return (
    <Layout navItems={[{ label: 'Home', href: '#' }]} sidebarItems={[]}> 
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        {step === 0 && (
          <Card title="Welcome" subtitle="Let's get you started">
            <p className="mb-4">Welcome! This quick onboarding will set up your profile and preferences.</p>
            <div className="flex justify-end">
              <Button onClick={next}>Get started</Button>
            </div>
          </Card>
        )}

        {step === 1 && (
          <Card title="Profile" subtitle="Tell us about yourself">
            <div className="space-y-3">
              <Input
                label="Full name"
                value={profile.name}
                onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))}
                placeholder="Jane Doe"
              />
              <Input
                label="Email"
                value={profile.email}
                onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
                placeholder="you@example.com"
              />

              <div className="flex justify-between">
                <Button variant="ghost" onClick={prev}>
                  Back
                </Button>
                <Button onClick={next}>Continue</Button>
              </div>
            </div>
          </Card>
        )}

        {step === 2 && (
          <Card title="You're ready" subtitle="All set">
            <div className="mb-4">
              <div className="text-lg font-medium">Thanks, {profile.name || 'there'}!</div>
              <div className="text-sm text-gray-600">We've saved your preferences.</div>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => setStep(0)}>Restart</Button>
            </div>
          </Card>
        )}
      </div>
    </Layout>
  )
}

export const Default = () => <OnboardingFlow />
