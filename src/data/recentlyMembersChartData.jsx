const recentlyMembersChartData = {
  datasets: [
    {
      barPercentage: 0.5,
      label:'線上人數',
      borderColor: ['#008fc7', '#009e9c'],
      backgroundColor: ['#0875b0', '#01908e'],
      data: [
        {
          x:"日",
          y: [3982, 4325],
          doubleLabel: [3982, 4325]
        },
        {
          x:"月",
          y: [3652, 5124],
          doubleLabel: [3652, 5124]
        }
      ]
    }
  ]
}

export default recentlyMembersChartData