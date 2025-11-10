import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)


export default function ProgressDashboard({ data }) {
const labels = data.map(d => d.date)
const scores = data.map(d => d.score)
const chartData = { labels, datasets: [{ label: 'Score', data: scores, tension: 0.3 }] }
return (
<div className="bg-white p-4 rounded shadow">
<h3 className="font-semibold">Progress</h3>
<div className="mt-3">
<Line data={chartData} />
</div>
</div>
)
}