import PropTypes from 'prop-types'
import 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = ({ chartData }) => {
  if (typeof chartData === 'undefined' || !(chartData?.labels)) {
    return <></>
  }

  let backgroundColors = []
  let data = []
  let chartTitleColor = 'rgba(255, 255, 255)'
  let maxDataIndex = 0

  chartData.datasets.forEach((dataset, index) => {
    backgroundColors.push(`rgba(${dataset.backgroundColorRgb})`)
    data.push(dataset.data)

    if (dataset.data > chartData.datasets[maxDataIndex].data) {
      maxDataIndex = index
    }
  })
  chartTitleColor = backgroundColors[maxDataIndex]

  const chart = {
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: chartData.datasets[0].label,
          data: data,
          borderWidth: 0,
          backgroundColor: backgroundColors
        }
      ]
    },
    options: {
      cutout: '80%',
      layout: {
        padding: 40
      },
      plugins: {
        legend: {
          display: false
        }
      }
    },
    plugins: [{
      beforeDatasetDraw: (chart) => {
        const { ctx, data } = chart
        const chartDatasetMetaData = chart.getDatasetMeta(0).data[0]

        ctx.save()
        ctx.font = '16px sans-serif'
        ctx.fillStyle = chartTitleColor
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(data.datasets[0].label, chartDatasetMetaData.x, chartDatasetMetaData.y)
      },
      afterDraw: (chart) => {
        const { ctx, data, chartArea: { width, height } } = chart
        const halfWidth = (width + 80) / 2
        const halfHeight = (height + 80) / 2

        ctx.save()
        ctx.font = '16px sans-serif'
        ctx.fillStyle = '#c5dae3'

        chart.getDatasetMeta(0).data.forEach((dataPoint, index) => {
          const { x, y } = dataPoint.tooltipPosition()
          const text = data.labels[index]
          const textAlignValue = (x >= halfWidth) ? 'left' : 'right'
          const textWidth = ctx.measureText(text).width
          const xPosition = (x >= halfWidth) ? x + textWidth : x - textWidth
          const yPosition = (y >= halfHeight) ? y + 20 : y - 20

          ctx.textAlign = textAlignValue
          ctx.textBaseline = 'middle'
          ctx.fillText(text, xPosition, yPosition)
        })
      }
    }]
  }

  return <Doughnut data={chart.data} options={chart.options} plugins={chart.plugins} />
}
DoughnutChart.propTypes = {
  chartData: PropTypes.object.isRequired
}

export default DoughnutChart