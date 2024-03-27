"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {
  const data = {
    labels: ["Cabbage", "Watermelon", "Broccoli", "Maize"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 10, 20, 20],
        backgroundColor: [
          "rgba(0, 0, 255, 0.7)",
          "rgba(255, 0, 221, 0.7)",
          "rgba(2, 139, 71, 0.7)",
          "rgba(0, 0, 0, 0.7)",
        ],
        borderColor: [
          "rgba(0, 0, 255, 0.3)", // Plava boja bez providnosti
          "rgba(255, 0, 221, 0.3)", // Rozikasta boja bez providnosti
          "rgba(255, 206, 86, 1)", // Zelena boja bez providnosti
          "rgba(75, 192, 192, 1)", // Crna boja bez providnosti
        ],
        borderWidth: 1,
      },
    ],
  };

Hello Worldfggfgd
  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Best Selling Charts</h2>
      {/* Chart */}
      <div className="p-4">
        <Pie data={data} />
      </div>
    </div>
  );
}
