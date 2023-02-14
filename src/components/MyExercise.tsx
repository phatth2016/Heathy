import React from 'react'

export default function MyExercise() {
  return (
    <div className='w-full bg-dark-500 py-4 px-6'>
      <div className='flex w-1/4 text-white items-end'>
        <span className='text-base'>MY EXERCISE</span> <span className='ml-2 text-xl'>2021.05.21</span>
      </div>
      <div className=' grid-cols-2 grid gap-4 mt-3'>
        <div>
          {
            [1,2,3,4].map((item) => {
              return (
                <div key={item} className='flex justify-between text-light border-b border-dark-400 pb-1'>
                  <div className=''>
                    <div><span className=' text-[7px]'>●</span> 家事全般（立位・軽い）</div>
                    <div className=' text-primary-300 text-left px-4 text-sm'>26kcal</div>
                  </div>
                  <div className=' text-primary-300'>10 min</div>
                </div>
              )
            })
          }
        </div>
        <div>
          {
            [1,2,3,4].map((item) => {
              return (
                <div key={item} className='flex justify-between text-light  border-b border-dark-400 pb-1'>
                  <div className=''>
                    <div><span className=' text-[7px]'>●</span> 家事全般（立位・軽い）</div>
                    <div className=' text-primary-300 text-left px-4 text-sm'>26kcal</div>
                  </div>
                  <div className=' text-primary-300'>10 min</div>
                </div>
              )
            })
          }
          </div>
      </div>
    </div>
  )
}
