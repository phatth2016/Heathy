import { useEffect, useState } from 'react'
import Scroll from '../assets/icons/Scroll'

export default function ScollToTop() {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='fixed right-10 bottom-40'>
      {scrollTop > 100 ? 
        <div className=' cursor-pointer' 
          onClick={() => {
              document.body.scrollTop = 0; // For Safari
              document.documentElement.scrollTop = 0; 
              // For Chrome, Firefox, IE and Opera
            }
          }><Scroll/></div>
        :
        null
      }
    </div>
  )
}
