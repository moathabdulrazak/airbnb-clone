'use client'

import {User} from '@prisma/client'

interface NavbarProps{
  currentUser?: User | null;
  
}

import React from 'react'
import Container from '../Container'
import Logo from '../navbar/Logo'
import { Search } from './Search'
import { UserMenu } from './UserMenu'



export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  console.log({currentUser})
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
        <div className='py-4 border-b-[1px]' >
          <Container>
            <div className='flex flex-row items-center justify-between gap-3 md:gap-0' >
            
            <Logo/>
            <Search/>
            <UserMenu/>
            </div>
          </Container>
        </div>
    </div>
  )
}
