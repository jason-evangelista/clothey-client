import { FC } from 'react'
import { useRouter } from 'next/router'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import Link from 'next/link'
import Icon from '@components/global/Icon'
import classNames from 'classnames'

type LinkProps = {
  path: string
  title: string
  icon: IconProp
}

const paths: LinkProps[] = [
  {
    path: '/home',
    title: 'Home',
    icon: 'home',
  },
  {
    path: '/explore',
    title: 'Explore',
    icon: 'search',
  },
  {
    path: '/my-cart',
    title: 'My-Cart',
    icon: 'cart-shopping',
  },
]

const NavBar: FC = () => {
  const route = useRouter()
  const activeRoute = route.pathname

  const navBarActiveClassNames = classNames(
    'font-normal hover:underline underline font-semibold',
  )
  const navBarInActiveClassNames = classNames('font-normal hover:underline')

  return (
    <div className="w-full mb-4">
      <nav className="flex items-center justify-between w-full py-8">
        <div>
          <h1 className="font-extrabold">Clothe&apos;y</h1>
        </div>
        <div>
          <ul className="flex items-center gap-8 text">
            {paths.map((item) => (
              <li key={item.path}>
                <Link href={item.path} passHref>
                  <a
                    className={
                      activeRoute === item.path
                        ? navBarActiveClassNames
                        : navBarInActiveClassNames
                    }
                  >
                    <Icon icon={item.icon} />
                    &nbsp;
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
