// ReactJS
import { Suspense } from "react";

// NextJS
import dynamic from "next/dynamic";


const DashboardLayout = dynamic(() => import("@layouts/DashboardLayout"), { ssr: false });
const Seo = dynamic(() => import("@components/Seo"), { ssr: false });
const Loader = dynamic(() => import("@components/Loader"), { ssr: false });

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Suspense fallback={<Loader />} />
      <Seo title="Home - Dashboard" description="" url="" /> 
      <h2>Dashboard</h2>
    </DashboardLayout>
  );
}