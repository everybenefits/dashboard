import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/en', icon: HomeIcon, current: false },
  { name: 'Team', href: '/en/team', icon: UsersIcon, current: false },
  { name: 'Projects', href: '/en/projects', icon: FolderIcon, current: false },
  {
    name: 'Calendar',
    href: '/en/calendar',
    icon: CalendarIcon,
    current: false,
  },
  { name: 'Documents', href: '/en/documents', icon: InboxIcon, current: false },
  { name: 'Reports', href: '/en/reports', icon: ChartBarIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Settings', href: '/settings' },
  { name: 'Sign out', href: '/signout' },
]

export const en = {
  navigation,
  userNavigation,
}
