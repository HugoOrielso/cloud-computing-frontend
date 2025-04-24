import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen w-screen">
      {children}
    </div>
  )
}

export default Layout
