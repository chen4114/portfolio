import React from 'react'
import Image from 'next/image';

interface ImgGroupProp {
  imgGroup: string[]
}

const ImageGroup: React.FC<ImgGroupProp> = ({ imgGroup }) => {

  return (
    <div className='flex gap-5 justify-evenly flex-wrap'>
      {imgGroup.map((item, index) => (<>
        <div key={index} className='relative h-[12rem] w-[15rem]'>
          <Image src={item} alt='' layout="fill" objectFit='contain' />
        </div>
      </>
      ))}
    </div>
  )
}

export default ImageGroup