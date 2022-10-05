// ReactJS
import { Suspense } from 'react'

// NextJS
import dynamic from 'next/dynamic'
const Table = dynamic(async () => await import('@components/Table'), {
  ssr: false,
})

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

export default function DashboardPage(): JSX.Element {
  return (
    <DashboardLayout>
      <Suspense fallback={<Spinner />}>
        <Seo title="Dashboard - Team" description="" url="" />
        <Table />
      </Suspense>
    </DashboardLayout>
  )
}
