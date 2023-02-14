
import IMG_HEXAGON from '../assets/images/HexagonMenu.png'
import { HexagonMenuProps } from '../types/Menu.type'

export default function HexagonMenu(props: HexagonMenuProps) {
  return (
    <div className=' relative w-116px h-134px'>
      <img className=' absolute w-full h-full' src={IMG_HEXAGON} alt=""/>
      <div className=' absolute z-10 font-normal text-xl text-light text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
        <props.icon width={56} height={56}/>
        <span>{props.label}</span>
      </div>
    </div>
  )
}
