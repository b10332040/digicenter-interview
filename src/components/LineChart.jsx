import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

const chartPlugins = [{
  beforeDraw: (chart) => {
    const { ctx, chartArea: {top, bottom, left, width, height} } = chart

    ctx.save()

    const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)
    gradientBg.addColorStop(1, 'rgba(2, 11, 60, .6)')
    gradientBg.addColorStop(0.5, 'rgba(2, 11, 60, 0)')
    ctx.fillStyle = gradientBg
    ctx.fillRect(left, top, width, height)
  }
}]

const LineChart = ({ chartData, maxTicksLimit = 11 }) => {
  const chartOptions = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#516c91',
          maxTicksLimit: maxTicksLimit
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
  }
  return <Line data={chartData} options={chartOptions} plugins={chartPlugins} />
}
LineChart.propTypes = {
  chartData: PropTypes.object.isRequired,
  maxTicksLimit: PropTypes.number
}

export default LineChart