import React from 'react'
interface TitleOneProps {
  title: string;
  right?: string;
  children?: React.ReactNode; 
}

const TitleOne: React.FC<TitleOneProps> = ({ title, right = "", children }) => {
  return (
    <div >
      <div className='flex justify-between  items-end'>
        <div className='flex'>
        <div className='text-white bg-sky-600 inline-block text-[1.3rem] font-[600] px-[1rem]'> {title}</div>

          {children}
        </div>
        {right && <div>{right}</div>}
      </div>
      <div className='w-full h-[2px] bg-sky-600'></div>



    </div>
  )
}

export default TitleOne
