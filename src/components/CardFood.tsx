import CardFoodProps from '../types/Card.type'

export default function CardFood(props: CardFoodProps) {
  return (
    <div className=' w-234px h-234px relative'>
      <img className=' absolute w-full h-full object-cover object-center' src={props.urlImage}  alt=""/>
      <div className=' absolute left-0 bottom-0 z-10 bg-primary-300 text-light text-base p-2'>
          {props.label}
      </div>
    </div>
  )
}
