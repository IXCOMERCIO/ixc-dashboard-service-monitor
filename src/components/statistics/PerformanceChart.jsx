import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Registrar los componentes necesarios de Chart.js
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

export default function PerformanceChart({ graphData }) {
  const labels = graphData.data.map((item) => item.xDate);

  const data = {
    labels,
    datasets: [
      {
        label: "Disponibilidad (%)",
        data: graphData.data.map((item) => item.yAvgDisponibility),
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.1)",
        yAxisID: "y",
        tension: 0.4,
        pointRadius: 0,
        fill: true,
      },
      {
        label: "T. Respuesta (ms)",
        data: graphData.data.map((item) => item.yAvgResponseTime),
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.1)",
        yAxisID: "y1",
        tension: 0.4,
        pointRadius: 0,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        max: 100,
        title: {
          display: true,
          text: "Disponibilidad",
          color: "#22c55e",
        },
        ticks: {
          color: "#22c55e",
          callback: function (value) {
            return value + "%";
          },
        },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: "Tiempo de Respuesta",
          color: "#2563eb",
        },
        ticks: {
          color: "#2563eb",
          callback: function (value) {
            return value + " ms";
          },
        },
      },
    },
  };

  return (
    <div className="bg-white border rounded-lg shadow-sm p-6 mt-8">
      <div className="font-semibold text-lg mb-2">
        Rendimiento a lo largo del tiempo
      </div>
      <Line data={data} options={options} height={50} />
    </div>
  );
}
