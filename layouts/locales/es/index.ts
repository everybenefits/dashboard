import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Panel', href: '/es', icon: HomeIcon, current: true },
  { name: 'Equipo', href: '/es/team', icon: UsersIcon, current: false },
  { name: 'Proyectos', href: '/es/projects', icon: FolderIcon, current: false },
  {
    name: 'Calendario',
    href: '/es/calendar',
    icon: CalendarIcon,
    current: false,
  },
  {
    name: 'Documentos',
    href: '/es/documents',
    icon: InboxIcon,
    current: false,
  },
  { name: 'Reportes', href: '/es/reports', icon: ChartBarIcon, current: false },
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
