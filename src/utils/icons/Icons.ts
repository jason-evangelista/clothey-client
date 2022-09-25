import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faCartShopping,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

const initFontAwesomeIcons = () => library.add(faHome, faCartShopping, faSearch)

export default initFontAwesomeIcons
