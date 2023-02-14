
import { CardRecordProps } from '../types/Card.type'

export default function CardRecord(props: CardRecordProps) {
  const { urlImage, label, content} = props;
  return (
    <div className=' w-72 h-72 bg-primary-300 p-6 relative'>
      <div className=' w-full h-full bg-black'>
        <img className='mix-blend-luminosity opacity-25  w-full h-full object-cover object-center' src={urlImage} alt="" />
      </div>
      <div className=' absolute inset-0 flex flex-col justify-center items-center'>
        <span className=' w-full text-2xl text-primary-300 text-center mb-3'>{label}</span>
        <div className=' bg-primary-400 text-light text-sm font-light w-40 h-6 flex items-center justify-center'>{content}</div>
      </div>
    </div>
  )
}
