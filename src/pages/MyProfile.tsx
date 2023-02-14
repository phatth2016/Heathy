import Button from "../components/Button"
import CardMyDiary from "../components/CardMyDiary"
import CardRecord from "../components/CardRecord"
import MyExercise from "../components/MyExercise"
import { ListCardMyDiary, ListCardRecord } from "../MockupData"
import { useEffect, useState } from "react"
import Chart from "../components/Chart"
import ScrollToTop from '../components/ScollToTop'


export default function MyProfile() {
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
    <div className=" mt-14 max-w-960 m-auto">
      <div className='  flex flex-wrap justify-between m-auto items-center'>
          {
            ListCardRecord.map((card, index:number) => {
              return (
                <div key={index}  className="mt-3 lg:mt-0 m-auto">
                  <CardRecord 
                    urlImage={card.urlImage}
                    content={card.content}
                    label={card.label}
                  />
                </div>
              )
            })
          }
        </div>
        <div className=" mt-14">
          <Chart chartData={chartData} displayLegend={false} /> 
        </div>
        <div className=" m-auto mt-14">
          <MyExercise />
        </div>
        <div className=" mt-20">
          <div className=" text-xl text-dark-500 mb-2 text-left">MY DIARY</div>
          <div className='  grid grid-cols-4 gap-3 m-auto'>
            {
              ListCardMyDiary.map((card, index:number) => {
                return (
                  <div className=" col-span-4 md:col-span-2 lg:col-span-1 m-auto" key={index} >
                    <CardMyDiary 
                      title={card.title}
                      content={card.content}
                      time={card.time}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="my-14">
            <Button>自分の日記をもっと見る</Button>
        </div>
        <ScrollToTop />
    </div>
  )
}
