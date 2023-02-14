import {menuList} from '../MockupData'

export default function Footer() {
  return (
    <div className='w-full h-32 bg-dark-500 px-4 lg:px-40 '>
      <div className='flex items-center h-full  max-w-960 m-auto'>
        {
          menuList.map((menuItem, index: number) => {
            return (
              <div key={index} className=' text-xs text-light mr-2 lg:mr-11 cursor-pointer hover:text-primary-400'>
                {menuItem.label}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
