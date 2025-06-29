import { getAuthStatus } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const AuthLayout = ({children} : {children : ReactNode}) => {
    const {isAuthenticated} = getAuthStatus()
  
     if (isAuthenticated) {
      redirect('/');
    }
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default AuthLayout