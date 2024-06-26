import DashboardCharts from "@/components/backoffice/DashboardCharts";
import CustomDataTable from "@/components/backoffice/CustomDataTable";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import Heading from "@/components/backoffice/Heading";
import React from "react";

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* Large Cards */}
      <LargeCards />
      {/* Small Cards */}
      <SmallCards />
      {/* Charts */}
      <DashboardCharts />
      {/* Recent Orders Table */}
      {/* <CustomDataTable /> */}
    </div>
  );
}
