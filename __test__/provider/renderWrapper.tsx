import { render } from '@testing-library/react'
import { JSXElementConstructor, ReactElement } from 'react'

const renderWrapper = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
) => {
  render(ui)
}

export default renderWrapper
