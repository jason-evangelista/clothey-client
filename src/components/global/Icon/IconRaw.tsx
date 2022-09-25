import { FC } from 'react'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'

type Props = FontAwesomeIconProps

const IconRaw: FC<Props> = (props) => {
  return <FontAwesomeIcon {...props} />
}

export default IconRaw
