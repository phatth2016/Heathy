
import CardFood from '../components/CardFood';
import Button from '../components/Button';
import AchievementRate from '../components/AchievementRate'
import { listFoodCard, listHexagonMenu } from '../MockupData';
import HexagonMenu from '../components/HexagonMenu';
import { useEffect, useState } from 'react';
import Chart from '../components/Chart';
import ScrollToTop from '../components/ScollToTop'

export default function Home() {
  const [chartData, setChartData] = useState<any>()

  const getChartData = () => {
    setChartData({
      chartData: {
        labels: [
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
          "1月",
          "2月",
          "3月",
          "4月",
          "5月"
        ],
        datasets: [
          {
            data: [0.1, 0.4, 0.3, 0.1, 1, 0.5],
            backgroundColor: "transparent",
            borderColor: "#FFCC21",
            lineTension: 0,
            pointBackgroundColor: "#FFCC21"
          },
          {
            data: [0.3, 0.5, 0.6, 0.2, 0.8, 0.5],
            backgroundColor: "transparent",
            borderColor: "#8FE9D0",
            lineTension: 0,
            pointBackgroundColor: "#8FE9D0"
          }
        ]
      }
    });
  }

  useEffect(() => {
    getChartData()
  }, [])
  return (
    <div>
      <div className='flex flex-wrap lg:overflow-hidden h-full lg:max-h-[342px]'>
        <AchievementRate />
        <div className='mt-14 lg:mt-0 w-full lg:w-3/5'><Chart hideInfo={true} chartData={chartData} displayLegend={false} /> </div>
      </div>
      <div className=' flex justify-center items-center mt-6 flex-wrap'>
        { 
          listHexagonMenu.map((menuItem, index: number) => {
            return (
              <div key={index} className="mt-2 md:mt-0 mx-4 sm:mx-4 lg:mx-9">
                <HexagonMenu  icon={menuItem.icon} label={menuItem.label} action={menuItem.action}/>
              </div>
            )
          })
        }
      </div>
      <div className=' grid grid-cols-4 max-w-960 gap-2 m-auto mt-6'>
        {
          listFoodCard.map((card: { urlImage: string; label: string; }, index: number) => {
            return (
              <div className='col-span-4 md:col-span-2 lg:col-span-1 m-auto mt-3 lg:mt-0' key={index}>
                <CardFood  urlImage={card.urlImage} label={card.label}/>
              </div>
            )
          })
        }
      </div>
      <div className='my-6'>
          <Button>記録をもっと見る</Button>
      </div>
      <ScrollToTop />
    </div>
  )
}
