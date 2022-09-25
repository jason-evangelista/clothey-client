import { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren

const MyCart: FC<Props> = (props) => {
  return (
    <>
      <h1 className="text-center">MyCart Page</h1>
    </>
  )
}

export default MyCart
