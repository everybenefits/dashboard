// Types
import { PropsWithChildren } from "react"

// React
import { Fragment, Suspense } from "react";

// NextJS Components and Hooks
import dynamic from "next/dynamic";

// Local components
import useUser from "@hooks/useUser";

// Local Components
const Loader = dynamic(() => import("@components/Loader"))

function DashboardLayout({ children}: PropsWithChildren) {
  useUser()
  return (
    <Fragment>
      <Suspense fallback={<Loader />}></Suspense>
      <h1>Layout</h1>
      {children}
    </Fragment>
  )
}

export default DashboardLayout;