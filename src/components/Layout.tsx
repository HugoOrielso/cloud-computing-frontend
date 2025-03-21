import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col items-center justify-start min-w-screen min-h-screen'>
      {children}
    </div>
  )
}

export default Layout
