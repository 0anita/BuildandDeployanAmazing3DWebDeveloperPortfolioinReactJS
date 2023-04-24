import React, {useEffect, useState} from 'react'
import {link} from 'react-router-dom'
import {styles} from '../styles'
import { NavLinks } from '../constants'
import {logo, menu, close} from '../assets'

const Navbar = () => {
  return (
    <nav className={`
      ${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`
    }>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to ="/" className>
        </Link>

      </div>
   
    </nav>>
  )
}

export default Navbar