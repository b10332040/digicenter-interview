import PropTypes from 'prop-types'
import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import { formatNumberWithCommas } from '/utils'

const BarChart = ({ chartData }) => {
  if (typeof chartData === 'undefined' || !(chartData?.labels)) {
    return <></>
  }

  let borderColors = []
  let backgroundColors = []
  let data = []

  chartData.datasets.forEach((dataset, index) => {
    borderColors.push(`rgba(${dataset.borderColorRgb})`)
    backgroundColors.push(`rgba(${dataset.backgroundColorRgb})`)
    data.push({
      x: (typeof chartData.labels[index] !== 'undefined') ? chartData.labels[index] : '',
      y: dataset.data,
      doubleLabel: dataset.data
    })
  })

  const chart = {
    data: {
      datasets: [
        {
          barPercentage: 0.4,
          borderWidth: 1,
          label: chartData.datasets[0].label,
          borderColor: borderColors,
          backgroundColor: backgroundColors,
          data: data
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          ticks: {
            display: false,
          }
        },
        y: {
          beginAtZero: false,
          min: chartData.y.min,
          max: chartData.y.max,
          ticks: {
            display: false
          }
        }
      },
      elements: {
        point: {
          display: false
        }
      }
    },
    plugins: [{
      afterDatasetsDraw: (chart) => {
        const { ctx, data } = chart

        ctx.save()
        ctx.font = '16px sans-serif'
        ctx.fillStyle = '#c5dae3'

        chart.getDatasetMeta(0).data.forEach((dataPoint, index) => {
          const chartDatasetsData = data.datasets[0].data[index]
          const doubleLabels = chartDatasetsData.doubleLabel
          const tick = chartDatasetsData.x
          const tickWidth = ctx.measureText(tick).width
          const barChartWidth = dataPoint.width
          const startY = dataPoint.base
          const endY = dataPoint.y
          const startX = dataPoint.x
          const textStart = isNaN(doubleLabels[0]) ? doubleLabels[0] : formatNumberWithCommas(doubleLabels[0])
          const textEnd = isNaN(doubleLabels[1]) ? doubleLabels[1] : formatNumberWithCommas(doubleLabels[1])
          const textWidthStart = ctx.measureText(textStart).width
          const textWidthEnd = ctx.measureText(textEnd).width

          ctx.textBaseline = 'middle'
          if (index === 0) {
            ctx.textAlign = 'right'
            const textX = startX - barChartWidth + 12
            ctx.fillText(textStart, textX, startY)
            ctx.fillText(textEnd, textX, endY)
            ctx.fillText(tick, startX + (tickWidth / 2) , endY + 20)

          } else if ((data.datasets[0].data.length - 1) === index) {
            ctx.textAlign = 'left'
            ctx.fillText(textStart, startX + textWidthStart + 6, startY)
            ctx.fillText(textEnd, startX + textWidthEnd + 6, endY)
            ctx.fillText(tick, startX - (tickWidth / 2) , endY + 20)

          } else {
            ctx.textAlign = 'center'
            ctx.fillText(textStart, startX, startY)
            ctx.fillText(textEnd, startX, endY)
            ctx.fillText(tick, startX , endY + 20)
          }
        })
      }
    }]
  }
  return <Bar data={chart.data} options={chart.options} plugins={chart.plugins} />
}
BarChart.propTypes = {
  chartData: PropTypes.object.isRequired
}

export default BarChart