import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

const LineChart = ({ chartData }) => {
  if (typeof chartData === 'undefined' || !(chartData?.labels)) {
    return <></>
  }

  const chart = {
    data: {
      labels: chartData.labels,
      datasets: chartData.datasets.map((dataset) => {
        return {
          label:dataset.label,
          borderWidth: 2,
          backgroundColor: (context) => {
            if (!context.chart.chartArea) {
              return
            }
            const { ctx, chartArea: {top, bottom} } = context.chart
            const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)
            gradientBg.addColorStop(0, `rgba(${dataset.borderColorRgb}, 0.3)`)
            gradientBg.addColorStop(1, `rgba(${dataset.borderColorRgb}, 0)`)
            return gradientBg
          },
          fill: true,
          borderColor: `rgba(${dataset.borderColorRgb}, 1)`,
          data: dataset.data
        }
      })
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          offset: true,
          ticks: {
            color: '#516c91',
            maxTicksLimit: (chartData?.maxTicksLimit) ? chartData.maxTicksLimit : 11
          },
          grid: {
            color: '#131836',
          },
          border: {
            color: '#131836',
          }
        },
        y: {
          ticks: {
            color: '#516c91',
            stepSize: 50
          },
          grid: {
            color: '#131836',
          },
          border: {
            color: '#131836',
          }
        }
      },
      elements: {
        point: {
          radius: 0
        }
      }
    },
    plugins: [{
      beforeDraw: (chart) => {
        const { ctx, chartArea: { top, bottom, left, width, height } } = chart

        ctx.save()
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)
        gradientBg.addColorStop(1, 'rgba(2, 11, 60, .6)')
        gradientBg.addColorStop(0.5, 'rgba(2, 11, 60, 0)')
        ctx.fillStyle = gradientBg
        ctx.fillRect(left, top, width, height)
      },
      afterDatasetDraw: (chart) => {
        if (chartData?.baselineValue) {
          const { ctx, chartArea: { left, right }, scales: { y } } = chart
          const yPosition = 70
          const dotWidth = 10
          
          ctx.save()
          
          const drawDottedLine = ({ yPosition, LineColor }) => {
            ctx.beginPath()
            ctx.lineWidth = 2
            ctx.strokeStyle = LineColor
            ctx.setLineDash([4, 2])
            ctx.moveTo(left, y.getPixelForValue(yPosition))
            ctx.lineTo(right - 4, y.getPixelForValue(yPosition))
            ctx.stroke()
            ctx.closePath()
            ctx.restore()
            ctx.setLineDash([])
          }
          
          const drawDot = ({ xPosition, yPosition, radius, dotColor }) => {
            ctx.beginPath()
            const angle = Math.PI / 180
            ctx.fillStyle = dotColor
            ctx.arc(xPosition, y.getPixelForValue(yPosition), radius, angle * 0, angle * 360, false)
            ctx.fill()
            ctx.closePath()
          }

          drawDottedLine({
            yPosition: yPosition,
            LineColor: 'rgba(1, 79, 120, 1)'
          })
          drawDot({
            xPosition: right - dotWidth,
            yPosition: yPosition,
            radius: dotWidth,
            dotColor: 'rgba(31, 205, 247, 0.15)'
          })
          drawDot({
            xPosition: right - dotWidth,
            yPosition: yPosition,
            radius: 3,
            dotColor: 'rgba(31, 205, 247, 1)'
          })
        }
      }
    }]
  }
  
  return <Line data={chart.data} options={chart.options} plugins={chart.plugins} />
}
LineChart.propTypes = {
  chartData: PropTypes.object.isRequired
}

export default LineChart