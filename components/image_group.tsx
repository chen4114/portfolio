import React from 'react'
import Image from 'next/image';

interface ImgGroupProp {
    imgGroup: string[]
}

const ImageGroup:React.FC<ImgGroupProp> = ({imgGroup}) => {

  return (
    <div className='flex gap-5'>
    {imgGroup.map((item, index) => (<>
      <div key={index} className='relative h-[20rem] w-[20rem]'>
        <Image src={item} alt='' layout="fill" objectFit='contain' />
      </div>
      </>
    ))}
    test


  </div>
  )
}

export default ImageGroup