import { MenuProps, MenuItem } from '../types/Menu.type'

const SubMenu = ({children}: {children: string}) => {
  return (
    <div className=' cursor-pointer w-full h-72px px-8 py-6 text-light text-lg font-light hover:bg-dark-500'>
      {children}
    </div>
  )
}

export default function Menu({menuList}:MenuProps) {
  return (
    <div className=' w-280px bg-dark-400'>
      {
        menuList?.map((menuItem: MenuItem, index: number) => {
          return (
            <div key={index} onClick={menuItem.action}>
              <div className=' w-full h-1px mix-blend-normal opacity-10 bg-light'></div>
              <SubMenu >{menuItem.label}</SubMenu>
              <div className=' w-full h-1px mix-blend-normal opacity-25 bg-dark-600'></div>
            </div>
          )
        })
      }
    </div>
  )
}
