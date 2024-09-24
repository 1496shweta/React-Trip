import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className="p-2  shadow-sm flex justify-between items-center">
    <img className="w-16 h-10" src="/logo.svg" alt="Logo" />
    <div>
      <Button className="ml-auto">Sign In</Button>
    </div>
  </div>
  
  )
}

export default Header
