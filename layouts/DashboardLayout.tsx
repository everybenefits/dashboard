// Types
import { PropsWithChildren } from "react";

// React
import { Fragment, Suspense } from "react";

// NextJS Components and Hooks
import dynamic from "next/dynamic";

// Local hooks
import useUser from "@hooks/useUser";

// Local Components
const Spinner = dynamic(() => import("@components/Spinner"), { ssr: true });
const Seo = dynamic(() => import("@components/Seo"), { ssr: false });

// Layout
function DashboardLayout({ children, title, description, url }: any): JSX.Element {
  const user = useUser();

  return user ? (
    <Fragment>
      <Seo title={title} description={description} url={url} />
      {children}</Fragment>
  ) : (
    <Suspense fallback={<Spinner />} />
  );
}

export default DashboardLayout;