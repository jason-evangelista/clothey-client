import { render } from '@testing-library/react'
import { NextRouter } from 'next/router'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { JSXElementConstructor, ReactElement } from 'react'

/**
This render wrapper is for render that test with next router  
**/
const renderWrapperRouter = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  router: NextRouter,
) => {
  render(<RouterContext.Provider value={router}>{ui}</RouterContext.Provider>)
}

export default renderWrapperRouter
