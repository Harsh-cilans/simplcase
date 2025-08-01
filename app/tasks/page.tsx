'use client'

import Info from '@/components/Tasks/Info'
import Task from '@/components/Tasks/Task'
import React, {JSX} from 'react'

const page = ():JSX.Element => {
  return (
    <div className='h-[835px]'>
        <Info/>
        <Task/>
    </div>
  )
}

export default page