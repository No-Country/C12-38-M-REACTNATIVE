import { Entypo } from '@expo/vector-icons'
import { Link, usePathname } from 'expo-router'

function TabItem({ to, iconName, iconSize }) {
  const pathname = usePathname()
  const isActive = pathname === to ? '#ffffff' : '#d1d5db'

  return (
    <Link href={to} asChild>
      <Entypo name={iconName} size={iconSize} color={isActive} />
    </Link>
  )
}

export default TabItem
