import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col flex-1 grow items-center justify-start min-w-screen min-h-screen lg:grid lg:grid-cols-[400px,1fr] '>
      {children}
    </div>
  )
}

export default Layout
