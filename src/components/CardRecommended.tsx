
interface CardRecommendedProps {
  label: string
  title: string
}

export default function CardRecommended(props: CardRecommendedProps) {
  return (
    <div className=' w-216px h-36 bg-dark-600 flex flex-col items-center justify-center px-3'>
      <div className=' text-primary-300 text-xl mb-2'>{props.title}</div>
      <div className=' w-14 bg-light h-1px'></div>
      <div className=' text-light textlg font-light mt-2'>{props.label}</div>
    </div>
  )
}
