import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function ApplicationChart() {

  const data = {
    labels: [
      "Applied",
      "Interview",
      "Offer",
      "Rejected",
    ],

    datasets: [
      {
        data: [10, 4, 2, 3],

        backgroundColor: [
          "#3b82f6",
          "#f59e0b",
          "#22c55e",
          "#ef4444",
        ],
      },
    ],
  };

  return (
    <div className="chart-card">
      <h2>📊 Applications</h2>

      <Doughnut data={data} />
    </div>
  );
}

export default ApplicationChart;