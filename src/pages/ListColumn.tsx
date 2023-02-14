import CardHealth from "../components/CardHealth"
import CardRecommended from "../components/CardRecommended"
import { ListCardHealth, ListCradRecommeded } from "../MockupData"
import ScrollToTop from '../components/ScollToTop'

export default function ListColumn() {
  return (
    <div className=" mt-14 mb-14">
      <div className=' max-w-960 grid grid-cols-4 gap-8 m-auto'>
        {
          ListCradRecommeded.map((card, index:number) => {
            return (
              <div key={index} className="col-span-4 md:col-span-2 lg:col-span-1 m-auto">
                <CardRecommended 
                  title={card.title}
                  label={card.label}
                />
              </div>
            )
          })
        }
    </div>
    <div className=' max-w-960 grid grid-cols-4   gap-8 m-auto mt-14'>
      {
        ListCardHealth.map((card, index:number) => {
          return (
            <div key={index} className="col-span-4 md:col-span-2 lg:col-span-1 m-auto">
              <CardHealth 
                title={card.title}
                label={card.label}
                time={card.time}
              />
            </div>
          )
        })
      }
    </div>
    <ScrollToTop />
  </div>
  )
}
