// ReactJS
import { Suspense, useId } from 'react'

// Hooks
import { useGetUsers } from '@hooks/useGetUsers'

// NextJS
import dynamic from 'next/dynamic'
import Stats from '@components/Stats'
import MiniCalendar from '@components/MiniCalendar'

// Components
const Seo = dynamic(async () => await import('@components/Seo'), { ssr: false })
const DashboardLayout = dynamic(
  async () => await import('@layouts/DashboardLayout'),
  {
    ssr: false,
  },
)
const Spinner = dynamic(async () => await import('@components/Spinner'), {
  ssr: true,
})

export default function DashboardPage(): JSX.Element {
  const statsID = useId()
  const miniCalendarID = useId()

  const usersLenght = useGetUsers().length

  const stats = [
    {
      name: 'Agents',
      stat: usersLenght,
    },
    {
      name: 'Agencies',
      stat: 0,
    },
  ]

  return (
    <DashboardLayout>
      <Suspense fallback={<Spinner />}>
        <Seo title="Home - Dashboard" description="" url="" />
        <main className="grid grid-rows-1 gap-5">
          <section id={statsID}>
            <Stats stats={stats} />
          </section>
          <hr />
          <section id={miniCalendarID}>
            <MiniCalendar />
          </section>
        </main>
      </Suspense>
    </DashboardLayout>
  )
}
