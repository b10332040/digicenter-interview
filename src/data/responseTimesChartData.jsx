const responseTimesChartData = {
  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  datasets: [
    {
      label:'Max',
      borderWidth: 2,
      backgroundColor: (context) => {
        const bgColor = [
          'rgba(218, 154, 0, 0.3)',
          'rgba(218, 154, 0, 0)'
        ]
        if (!context.chart.chartArea) {
          return
        }
        const { ctx, chartArea: {top, bottom} } = context.chart
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)
        const colorTranches = 1 / (bgColor.length - 1)
        for (let i = 0; i < bgColor.length; i++) {
          gradientBg.addColorStop(0 + i * colorTranches, bgColor[i])
        }
        return gradientBg
      },
      fill: true,
      borderColor: '#d09507',
      data: [80, 0, 75, 52, 60, 40, 55, 85, 95, 0, 23, 55]
    },
    {
      label:'Average',
      borderWidth: 2,
      backgroundColor: (context) => {
        const bgColor = [
          'rgba(16, 168, 182, 0.3)',
          'rgba(16, 168, 182, 0)'
        ]
        if (!context.chart.chartArea) {
          return
        }
        const { ctx, chartArea: {top, bottom} } = context.chart
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)
        const colorTranches = 1 / (bgColor.length - 1)
        for (let i = 0; i < bgColor.length; i++) {
          gradientBg.addColorStop(0 + i * colorTranches, bgColor[i])
        }
        return gradientBg
      },
      fill: true,
      borderColor: '#10a8b6',
      data: [60, 98, 58, 35, 45, 50, 10, 70, 73, 85, 60, 52]
    }
  ]
}

export default responseTimesChartData