// ReactJS
import { Suspense } from 'react'

// NextJS
import dynamic from 'next/dynamic'

// Components
const CreateMemberForm = dynamic(() => import('@components/CreateMemberForm'), {
  ssr: false,
})
const DashboardLayout = dynamic(() => import('@layouts/DashboardLayout'), {
  ssr: false,
})
const Seo = dynamic(() => import('@components/Seo'), { ssr: false })
const Spinner = dynamic(() => import('@components/Spinner'), { ssr: true })

export default function DashboardPage(): JSX.Element {
  return (
    <DashboardLayout>
      <Suspense fallback={<Spinner />}>
        <Seo title="Create member - Team" description="" url="" />
        <CreateMemberForm />
      </Suspense>
    </DashboardLayout>
  )
}
