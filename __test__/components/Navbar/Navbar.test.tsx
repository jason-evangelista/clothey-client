import { fireEvent, screen, waitFor } from '@testing-library/react'

import NavBar from '@components/Navbar'
import mockRouter from '../../provider/mockRouter'
import renderWrapperRouter from '../../provider/renderWrapperRouter'

describe('Render all navs', () => {
  it('should render nav for home and navigate when click', async () => {
    let useMockRouter = mockRouter({ pathname: '/home' })
    renderWrapperRouter(<NavBar />, useMockRouter)
    const { getByText } = screen
    const HomeNav = getByText('Home')
    expect(HomeNav).toBeInTheDocument()

    waitFor(() => {
      fireEvent.click(HomeNav)
      expect(useMockRouter.push).toHaveBeenCalledWith('/home')
    })
  })
  it('should render nav for explore and navigate when click', async () => {
    let useMockRouter = mockRouter({ pathname: '/explore' })
    renderWrapperRouter(<NavBar />, useMockRouter)
    const { getByText } = screen
    const ExploreNav = getByText('Explore')
    expect(ExploreNav).toBeInTheDocument()
    waitFor(() => {
      fireEvent.click(ExploreNav)
      expect(useMockRouter.push).toHaveBeenCalledWith('/explore')
    })
  })
  it('should render nav for my-cart and navigate when click', async () => {
    let useMockRouter = mockRouter({ pathname: '/my-cart' })
    renderWrapperRouter(<NavBar />, useMockRouter)
    const { getByText } = screen
    const MyCartNav = getByText('My-Cart')
    expect(MyCartNav).toBeInTheDocument()

    waitFor(() => {
      fireEvent.click(MyCartNav)
      expect(useMockRouter.push).toHaveBeenCalledWith('/my-cart')
    })
  })
})
