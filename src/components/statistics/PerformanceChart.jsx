import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import React from 'react';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const labels = [
  "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00", "01:00"
];

const data = {
  labels,
  datasets: [
    {
      label: "Disponibilidad (%)",
      data: [99.8, 99.7, 99.6, 99.5, 99.4, 99.2, 99.8, 99.9, 99.95, 99.96, 99.97, 99.92],
      borderColor: "#22c55e",
      backgroundColor: "rgba(34,197,94,0.1)",
      yAxisID: "y",
      tension: 0.4,
      pointRadius: 0,
      fill: true,
    },
    {
      label: "T. Respuesta (ms)",
      data: [120, 130, 140, 200, 350, 300, 250, 200, 180, 160, 150, 148],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37,99,235,0.1)",
      yAxisID: "y1",
      tension: 0.4,
      pointRadius: 0,
      fill: false,
    }
  ]
};

const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 20,
      }
    },
    title: {
      display: false,
    }
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      min: 90,
      max: 100,
      title: {
        display: true,
        text: 'Disponibilidad',
        color: '#22c55e'
      },
      ticks: {
        color: '#22c55e',
        callback: function(value) { return value + '%'; }
      }
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      min: 100,
      max: 350,
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: 'Tiempo de Respuesta',
        color: '#2563eb'
      },
      ticks: {
        color: '#2563eb',
        callback: function(value) { return value + ' ms'; }
      }
    },
  }
};

export default function PerformanceChart() {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-6 mt-8">
      <div className="font-semibold text-lg mb-2">Rendimiento a lo largo del tiempo</div>
      <Line data={data} options={options} height={120} />
    </div>
  );
}