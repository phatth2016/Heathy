import COLUMN_1 from '../assets/images/column-1.jpg'
import { CardHealthProps } from '../types/Card.type'

export default function CardHealth(props: CardHealthProps) {
  const {title, time, label} = props
  return (
    <div>
      <div className=' w-234px h-36 relative'>
        <img className=' absolute w-full h-full object-cover object-center' src={COLUMN_1}  alt=""/>
        <div className=' absolute left-0 bottom-0 z-10 bg-primary-300 text-light text-base p-2'>
           {time}
        </div>
      </div>
      <p className='w-234px text-base text-dark-500 mt-2 text-left'>{title}</p>
      <p className='w-234px text-primary-500 text-xs mt-1 text-left'>{label}</p>
    </div>
  )
}
