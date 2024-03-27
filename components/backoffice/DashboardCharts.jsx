import BestSellingProductsChart from "./BestSellingProductsChart";
import WeeklySalesChart from "./WeeklySalesChart";
import React from "react";

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <WeeklySalesChart />
      <BestSellingProductsChart />
    </div>
  );
}
