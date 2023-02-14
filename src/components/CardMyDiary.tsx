interface CardMyDiaryProps {
  time: string
  title: string
  content:string
}

export default function CardMyDiary(props: CardMyDiaryProps) {
  const { time, title, content } = props
  return (
    <div className=' w-231px h-231px border-2 border-dark-400 p-4'>
      <div className=' w-1/2 text-lg text-drak-500 text-left'>
        {time}
      </div>
      <div className='text-xs font-light text-dark-500 text-left mt-2'>
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </div>
  )
}
