import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const RootPage = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <header>
        HEADER
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        FOOTER
      </footer>
    </QueryClientProvider>
  )
}
