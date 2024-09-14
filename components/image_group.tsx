import React from 'react'
import Image from 'next/image';

interface ImgGroupProp {
  imgGroup: string[],
  imageStyle?: string
}

const ImageGroup: React.FC<ImgGroupProp> = ({ imgGroup, imageStyle ="" }) => {

 if (!imageStyle && imgGroup.length !== 2) {
  imageStyle = "h-[15rem] w-[20rem]"
 } else if (imgGroup.length == 2) {
  imageStyle = "w-[30vw] min-h-[18vw] px-5"
 }
  return (
    <div className='flex gap-5 justify-between '>
      {imgGroup.map((item, index) => (<>
        <div key={index} className={`relative ${imageStyle}`}>
          <Image src={item} alt='' layout="fill" objectFit='contain' />
        </div>
      </>
      ))}
    </div>
  )
}

export default ImageGroup