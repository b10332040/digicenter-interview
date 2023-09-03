import "/styles/chartsPage.module.css"
import { BarChart, ChartCard, LineChart, DoughnutChart } from "/components"
import { recentlyMembers, responseTimes, totalTransaction, transactionFailed, timeoutTransaction } from "/data"
import { formatNumberWithCommas } from "/utils"

const ChartsPage = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-lg-6 mt-5'>
          <ChartCard className="px-3 py-2 h-100">
            <div className='row'>
              <div className='col-12 col-lg-6 col-xl-4'>
                <ChartCard.Title>
                  線上人數
                </ChartCard.Title>
                <ChartCard.Amount className="mt-2">
                  { formatNumberWithCommas(recentlyMembers.total) }
                  <ChartCard.Unit>人</ChartCard.Unit>
                </ChartCard.Amount>

                <ChartCard.AmountLabel className="mt-3">
                  Average
                </ChartCard.AmountLabel>
                <ChartCard.Amount className="mt-2" color="white">
                  { formatNumberWithCommas(recentlyMembers.average) }
                  <ChartCard.Unit>人</ChartCard.Unit>
                </ChartCard.Amount>
              </div>
              <div className='col-12 col-lg-6 col-xl-8'>
                <BarChart chartData={recentlyMembers} />
              </div>
            </div>
          </ChartCard>
        </div>

        <div className='col-12 col-lg-6 mt-5'>
          <ChartCard className="px-3 py-2 h-100">
            <div className='row'>
              <div className='col-12'>
                <ChartCard.Title>
                  交易筆數
                </ChartCard.Title>
              </div>
              <div className='col-12 col-lg-6 col-xl-4'>
                <ChartCard.Amount className="mt-2">
                  { formatNumberWithCommas(totalTransaction.total) }
                  <ChartCard.Unit>筆</ChartCard.Unit>
                </ChartCard.Amount>

                <ChartCard.AmountLabel className="mt-3">
                  當月平均
                </ChartCard.AmountLabel>
                <ChartCard.Amount className="mt-2" color="white">
                  { formatNumberWithCommas(totalTransaction.average) }
                  <ChartCard.Unit>筆</ChartCard.Unit>
                </ChartCard.Amount>
              </div>
              <div className='col-12 col-lg-6 col-xl-8'>
                <LineChart chartData={totalTransaction} />
              </div>
            </div>
          </ChartCard>
        </div>

        <div className='col-12 col-lg-6 mt-5'>
          <ChartCard className="px-3 py-2 h-100">
            <div className='row'>
              <div className='col-12'>
                <ChartCard.Title className='col-12'>
                  回應時間
                </ChartCard.Title>
              </div>
              <div className='col-12 col-lg-6 col-xl-4'>
                <ChartCard.AmountLabel className="mb-2" color='orange'>
                  Max
                </ChartCard.AmountLabel>
                <ChartCard.Amount color="white">
                  { responseTimes.max }
                  <ChartCard.Unit>ms</ChartCard.Unit>
                </ChartCard.Amount>

                <ChartCard.AmountLabel className="mb-2 mt-4" color='green'>
                  Average
                </ChartCard.AmountLabel>
                <ChartCard.Amount color="white">
                  { responseTimes.average }
                  <ChartCard.Unit>ms</ChartCard.Unit>
                </ChartCard.Amount>
              </div>
              <div className='col-12 col-lg-6 col-xl-8'>
                <LineChart chartData={responseTimes} />
              </div>
            </div>
          </ChartCard>
        </div>

        <div className='col-12 col-lg-6 mt-5'>
          <ChartCard className="px-3 py-2 h-100">
            <div className='row'>
              <div className='col-12 col-md-5'>
                <ChartCard.Title>
                  交易失敗
                </ChartCard.Title>
                <ChartCard.Amount className="mt-2">
                  { formatNumberWithCommas(transactionFailed.total) }
                  <ChartCard.Unit>筆</ChartCard.Unit>
                </ChartCard.Amount>
                <DoughnutChart chartData={transactionFailed} />
              </div>
              <div className='col-12 col-md-2'></div>
              <div className='col-12 col-md-5'>
                <ChartCard.Title>
                  超時交易
                </ChartCard.Title>
                <ChartCard.Amount className="mt-2">
                  { formatNumberWithCommas(timeoutTransaction.total) }
                  <ChartCard.Unit>筆</ChartCard.Unit>
                </ChartCard.Amount>
                <DoughnutChart chartData={timeoutTransaction} />
              </div>
            </div>
          </ChartCard>
        </div>
      </div>
    </div>
  )
}

export default ChartsPage