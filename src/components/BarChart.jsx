import PropTypes from 'prop-types'
import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

const chartOptions = {
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      ticks: {
        display: false,
        color: '#516c91',
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      beginAtZero: false,
      min: 3500,
      max: 5500,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: false,
      }
    }
  },
  elements: {
    point: {
      display: false
    }
  }
}

const chartPlugins = [{
  afterDatasetsDraw: (chart) => {
    const { ctx, data } = chart

    ctx.save()
    ctx.font = '18px sans-serif'
    ctx.fillStyle = '#c5dae3'

    chart.getDatasetMeta(0).data.forEach((datapoint, index) => {
      const chartDatasetsDataArray = data.datasets[0].data
      const chartDatasetsData = chartDatasetsDataArray[index]
      const doubleLabels = chartDatasetsData.doubleLabel
      const tick = chartDatasetsData.x
      const tickWidth = ctx.measureText(tick).width
      const textStart = doubleLabels[0]
      const textEnd = doubleLabels[1]
      const chartDatasetMetaData = chart.getDatasetMeta(0).data[index]
      const barChartWidth = chartDatasetMetaData.width
      const startY = chartDatasetMetaData.base
      const endY = chartDatasetMetaData.y
      const x = chartDatasetMetaData.x
      const textWidthStart = ctx.measureText(textStart).width
      const textWidthEnd = ctx.measureText(textEnd).width
      
      if (index === 0) {
        const textX = x - barChartWidth - (barChartWidth / 4)
        ctx.fillText(textStart, textX, startY + 4)
        ctx.fillText(textEnd, textX, endY + 4)

      } else if ((chartDatasetsDataArray.length - 1) === index) {
        ctx.fillText(textStart, x + textWidthStart, startY + 4)
        ctx.fillText(textEnd, x + textWidthEnd, endY + 4)

      } else {
        ctx.fillText(textStart, x - (textWidthStart / 2), startY + 4)
        ctx.fillText(textEnd, x - (textWidthEnd / 2), endY + 4)
      }

      ctx.fillText(tick, x - (tickWidth / 2), endY + 24)
    })
  }
}]

const BarChart = ({ chartData }) => {
  return <Bar data={chartData} options={chartOptions} plugins={chartPlugins} />
}
BarChart.propTypes = {
  chartData: PropTypes.object.isRequired
}

export default BarChart