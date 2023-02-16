// ReactJS
import { Suspense } from 'react'

// NextJS
import dynamic from 'next/dynamic'
import Stats from '@components/Stats'
import MiniCalendar from '@components/MiniCalendar'

// Components
const DashboardLayout = dynamic(
  async () => await import('@layouts/DashboardLayout'),
  {
    ssr: false,
  },
)
const Seo = dynamic(async () => await import('@components/Seo'), { ssr: false })
const Spinner = dynamic(async () => await import('@components/Spinner'), {
  ssr: true,
})

const stats = [
  {
    name: 'Agents',
    stat: 30,
  },
  {
    name: 'New Agents',
    stat: 5,
  },
  {
    name: 'Agencies',
    stat: 15,
  },
]

export default function DashboardPage(): JSX.Element {
  return (
    <DashboardLayout>
      <Suspense fallback={<Spinner />}>
        <Seo title="Home - Dashboard" description="" url="" />
        <main className="grid grid-rows-1 gap-5">
          <section>
            <Stats stats={stats} />
          </section>

          <section>
            <MiniCalendar />
          </section>
        </main>
      </Suspense>
    </DashboardLayout>
  )
}
