import React from 'react'
import { Outlet } from 'react-router-dom'

export const RootPage = () => {
  return (
    <div>
      <header>
        HEADER
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        FOOTER
      </footer>
    </div>
  )
}
