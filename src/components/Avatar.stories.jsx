import React from 'react'
import Avatar from './Avatar'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
}

export const WithImage = () => (
  <Avatar src="https://avatars.githubusercontent.com/u/9919?s=64&v=4" name="Octocat" alt="Octocat" size="md" />
)

export const Initials = () => <Avatar name="Jane Doe" size="md" />

export const Large = () => <Avatar name="Axel Rose" size="lg" />
