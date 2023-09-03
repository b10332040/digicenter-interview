const responseTimes = {
  max: 12.2,
  average: 5.1,
  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  maxTicksLimit: 6,
  baselineValue: 70,
  datasets: [
    {
      label: '最大回應時間',
      data: [80, 0, 75, 52, 60, 40, 55, 85, 95, 0, 23, 55],
      borderColorRgb: '218, 154, 0'
    },
    {
      label: '平均回應時間',
      data: [60, 98, 58, 35, 45, 50, 10, 70, 73, 85, 60, 52],
      borderColorRgb: '16, 168, 182'
    }
  ]
}

export default responseTimes