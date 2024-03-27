import LargeCard from "./LargeCard";
import React from "react";

export default function LargeCards() {
  const orderStatus = [
    {
      period: "Today Orders",
      sales: 110000,
      color: "bg-green-600",
    },
    {
      period: "Yesterday Orders",
      sales: 110000,
      color: "bg-blue-600",
    },
    {
      period: "This Month",
      sales: 300000,
      color: "bg-orange-600",
    },
    {
      period: "All-Time Sales",
      sales: 5000000,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((item, i) => {
        return <LargeCard className="bg-green-600" data={item} key={i} />;
      })}
    </div>
  );
}
