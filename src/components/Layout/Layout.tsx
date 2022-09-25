import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import NavBar from '@components/Navbar'
import PageSpacing from '@components/global/PageSpacing'

const showReactQueryTool = process.env.NODE_ENV === 'development'

type Props = PropsWithChildren

const Layout: FC<Props> = (props) => {
  const { children } = props

  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <PageSpacing>
        <NavBar />
        {children}
      </PageSpacing>
      {showReactQueryTool && (
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      )}
    </QueryClientProvider>
  )
}

export default Layout
