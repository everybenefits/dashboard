import { CalendarIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Panel', href: '/es', icon: HomeIcon, current: true },
  { name: 'Reuniones', href: '/es/meetings', icon: UsersIcon, current: false },
  {
    name: 'Calendario',
    href: '/es/calendar',
    icon: CalendarIcon,
    current: false,
  },
]
const userNavigation = [
  { name: 'Perfil', href: '/es/profile' },
  { name: 'Configuracion', href: '/es/settings' },
  { name: 'Salir', href: '/es/signout' },
]

export const es = {
  navigation,
  userNavigation,
}
