import { CalendarIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/en', icon: HomeIcon, current: false },
  { name: 'Team', href: '/en/team', icon: UsersIcon, current: false },
  {
    name: 'Calendar',
    href: '/en/calendar',
    icon: CalendarIcon,
    current: false,
  },
]
const userNavigation = [{ name: 'Your Profile', href: '/profile' }]

export const en = {
  navigation,
  userNavigation,
}
