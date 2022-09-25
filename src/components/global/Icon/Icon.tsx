import dynamic from 'next/dynamic'

const Icon = dynamic(() => import('./IconRaw'), { ssr: false })

export default Icon
