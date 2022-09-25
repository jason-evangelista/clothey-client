import { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren

const PageSpacing: FC<Props> = (props) => {
  const { children } = props
  return <div className="w-[90%] xl:w-[80%] mx-auto">{children}</div>
}

export default PageSpacing
