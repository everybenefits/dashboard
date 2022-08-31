// Types
import type { PropsWithChildren } from "react"

// React
import { Fragment, Suspense } from "react";

// NextJS Components
import dynamic from "next/dynamic";

// Local Components
const Loader = dynamic(() => import("@components/Loader"))

function DashboardLayout({ children}: PropsWithChildren) {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}></Suspense>
      <h1>Layout</h1>
      {children}
    </Fragment>
  )
}

export default DashboardLayout;