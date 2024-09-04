import React, { useEffect, useState } from 'react'
interface Slide {
  src: string;
  alt: string;
}
interface SignCarouselProps {
  data: Slide[];
}

const SignCarousel:React.FC<SignCarouselProps> = ({data}) => {
  const [slide,setSlide]= useState(0);
  const [intervalDuration, setIntervalDuration] = useState(2500);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlide((prev: number) => (prev + 1) % data.length);
    }, intervalDuration);

    return () => clearInterval(slideInterval); // Clear the interval on component unmount
  }, [data.length, intervalDuration]);

  return (
    <div className="carous relative flex justify-center items-center">
      {data.map((item: { src: string | undefined; alt: string | undefined }, idx: React.Key | null | undefined)=>{
        return <img src={item.src} 
        alt={item.alt} 
        key={idx} 
        className={slide==idx?"rounded-lg slide h-full w-full":"hidden"} />
      })}
      <span className='flex absolute bottom-4'>
        {
          data.map((_,idx)=>{
            return <button key={idx} onClick={()=>{setSlide(idx);setIntervalDuration(Math.floor(Math.random() * (2600 - 2200 + 1) ) + 2500);}} className={slide!=idx?'cursor-pointer mx-1 arrow border-none outline-none bg-gray-300 w-1 rounded-full h-1':'cursor-pointer mx-1 arrow border-none outline-none bg-gray-200 w-3 rounded-full h-1'}></button>
          })
        }
      </span>
    </div>
  )
}

export default SignCarousel