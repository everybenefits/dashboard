// ReactJS
import { Suspense } from 'react'

// NextJS
import dynamic from 'next/dynamic'

// Components
const DashboardLayout = dynamic(async () => await import('@layouts/DashboardLayout'), {
  ssr: false
})
const Seo = dynamic(async () => await import('@components/Seo'), { ssr: false })
const Spinner = dynamic(async () => await import('@components/Spinner'), { ssr: true })

export default function DashboardPage (): JSX.Element {
  return (
    <DashboardLayout>
      <Suspense fallback={<Spinner />}>
        <Seo title="Home - Dashboard" description="" url="" />
        <h2>Dashboard</h2>
      </Suspense>
    </DashboardLayout>
  )
}
