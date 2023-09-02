const totalTransactionsChartData = {
  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  datasets: [
    {
      label:'交易筆數',
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
      data: [80, 100, 30, 40, 0, 70, 50, 80, 45, 90, 85, 40]
    }
  ]
}

export default totalTransactionsChartData