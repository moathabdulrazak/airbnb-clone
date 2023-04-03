'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import Heading from './Heading'


interface EmptyState{
  title?: string
  subtitle?: string
  showReset?: boolean
}

const EmptyState: React.FC<EmptyState> = ({
  title = 'No Exact matches',
  subtitle = 'Try changing or removing some of your filters',
  showReset
}) => {
  const router = useRouter();
  return (
    <div className='
    h-[60vh]
    flex
    flex-col
    gap-2
    justify-center
    items-center
    ' >
      <Heading
      center
      title={title}
      subtile={subtitle}
      />
      </div>
  )
}

export default EmptyState