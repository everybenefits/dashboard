import dynamic from "next/dynamic";

const DashboardLayout = dynamic(() => import("@layouts/DashboardLayout"), { ssr: false });

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h2>Dashboard</h2>
    </DashboardLayout>
  );
}