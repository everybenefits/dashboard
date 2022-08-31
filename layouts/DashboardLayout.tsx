// Types
import type { PropsWithChildren } from "react"

// React
import { Fragment, Suspense } from "react";

// Local Components
import { Loader } from "@components/Loader";

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