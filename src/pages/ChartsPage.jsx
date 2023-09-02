import styles from "/styles/chartsPage.module.css"
import { BarChart, LineChart } from "/components"
import { recentlyMembersChartData, totalTransactionsChartData, responseTimesChartData } from "/data"

const ChartsPage = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-lg-6 mt-5'>
          <div className='row'>
            <div className='col-12 col-lg-6 col-xl-4'>
              <h2>線上人數</h2>
              <p>4,325 人</p>
            </div>
            <div className='col-12 col-lg-6 col-xl-8'>
              <BarChart chartData={recentlyMembersChartData} />
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-6 mt-5'>
          <div className='row'>
            <div className='col-12 col-lg-6 col-xl-4'>
              <h2>交易筆數</h2>
              <p>287,389 筆</p>
            </div>
            <div className='col-12 col-lg-6 col-xl-8'>
              <LineChart chartData={totalTransactionsChartData} maxTicksLimit={4} />
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-6 mt-5'>
          <div className='row'>
            <div className='col-12 col-lg-6 col-xl-4'>
              <h2>回應時間</h2>
              <p>12.2 ms</p>
            </div>
            <div className='col-12 col-lg-6 col-xl-8'>
              <LineChart chartData={responseTimesChartData} maxTicksLimit={6} />
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-6 mt-5'></div>
      </div>
    </div>
  )
}

export default ChartsPage