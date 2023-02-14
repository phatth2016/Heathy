import Main_IMG from '../assets/images/main_photo.png'

export default function AchievementRate() {
  return (
    <div className='w-full md:w-2/5 relative'>
      <img className='w-full h-[342px] object-cover object-center' src={Main_IMG} alt="" />
      <div className='
        absolute z-10 w-181px h-181px rounded-full border-4 border-light 
        shadow-100 bg-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        flex justify-center items-center
        '
      >
        <div>
          <span className=' text-lg text-light mr-2'>05/21</span>
          <span className=' text-light text-2xl '>100%</span>
        </div>
      </div>
    </div>
  )
}
