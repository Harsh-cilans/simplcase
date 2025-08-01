'use client'

import React, { JSX } from 'react'
import ClientInfo from '@/components/Client/ClientInfo'
import ClientTable from '@/components/Client/ClientTable'

const page = ():JSX.Element => {
  return (
    <div className='h-[835px]'>
      <ClientInfo/>
      <ClientTable/> 
    </div>
  )
}

export default page