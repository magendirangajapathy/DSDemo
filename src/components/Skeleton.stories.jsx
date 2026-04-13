import React from 'react'
import Skeleton from './Skeleton'

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
}

export const TextLine = () => <Skeleton width="80%" height="1rem" />

export const Avatar = () => <Skeleton width="40px" height="40px" className="rounded-full" />

export const List = () => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <Skeleton width="40px" height="40px" className="rounded-full" />
      <div className="flex-1">
        <Skeleton width="60%" height="12px" />
        <Skeleton width="40%" height="10px" className="mt-2" />
      </div>
    </div>
    <div className="flex items-center gap-3">
      <Skeleton width="40px" height="40px" className="rounded-full" />
      <div className="flex-1">
        <Skeleton width="50%" height="12px" />
        <Skeleton width="30%" height="10px" className="mt-2" />
      </div>
    </div>
  </div>
)
