import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function SkillChart() {

  const data = {

    labels: [
      "Python",
      "React",
      "SQL",
      "AI",
      "Java",
    ],

    datasets: [

      {

        label: "Skill Level",

        data: [90, 85, 70, 80, 65],

      },

    ],

  };

  return (

    <div className="chart-card">

      <h2>💻 Skills</h2>

      <Bar data={data} />

    </div>

  );

}

export default SkillChart;