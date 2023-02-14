import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Challenge from '../assets/icons/Challenge'
import Close from '../assets/icons/Close'
import Info from '../assets/icons/Info'
import Logo from '../assets/icons/Logo'
import Memo from '../assets/icons/Memo'
import MenuDropdown from '../assets/icons/MenuDropdown'
import Menu from './Menu'

export default function Header() {
  const navigate = useNavigate()
  const menuList:any = useMemo(() => [
    {
      label: "自分の記録",
      action: () => {}
    },
    {
      label: "体重グラフ",
      action: () => {}
    },
    {
      label: "目標",
      action: () => {}
    },
    {
      label: "選択中のコース",
      action: () => {}
    },
    {
      label: "コラム一覧",
      action: () => navigate("/list-column")
    },
    {
      label: "設定",
      action: () => {}
    }
  ],[])
  
  return (
    <div className=' w-full h-16 bg-dark-500 sticky top-0 z-50'>
        <div className='max-w-960 m-auto flex items-center h-full p-2 md:p-0'>
          <div className=' w-1/2 flex items-center h-full cursor-pointer'>
            <Link to="/">
              <Logo width={100} height={40} />
            </Link>
          </div>
          <div className=' w-1/2 flex justify-end md:justify-between items-center'>
            <Link to="/my-profile">
              <div className='hidden md:flex items-center cursor-pointer'><Memo /><span className=' ml-2 font-light text-base text-light hover:text-primary-400'>自分の記録</span></div>
            </Link>
            <div className='hidden md:flex items-center cursor-pointer'><Challenge /><span className=' ml-2 font-light text-base text-light  hover:text-primary-400'>チャレンジ</span></div>
            <div className='hidden md:flex items-center cursor-pointer'><Info /><span className=' ml-2 font-light text-base text-light  hover:text-primary-400'>お知らせ</span></div>
            <div className='group flex items-center relative duration-200 cursor-pointer'>
              <div className='block group-hover:hidden duration-200'><MenuDropdown /> </div>
              <div className=' hidden group-hover:block duration-200'><Close/></div>
              <div className='hidden group-hover:block absolute top-8 right-0 duration-200'>
                <Menu menuList={menuList}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
