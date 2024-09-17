import React from 'react'
import Image from 'next/image';

interface ImgGroupProp {
  imgGroup: string[],
  imageStyle?: string
}

const ImageGroup: React.FC<ImgGroupProp> = ({ imgGroup, imageStyle ="" }) => {

  if (imageStyle) {

  } else if (imgGroup.length == 2) {
  imageStyle = "w-[30vw] h-[18vw]  px-5"
 } else if (imgGroup.length == 3) {
imageStyle = "w-[30vw] h-[18vw] px-5"
 } else {
  imageStyle = "h-[15rem] w-[20rem]"
 }
  return (
    <div className='flex gap-5 justify-between '>
      {imgGroup.map((item, index) => (<>
        <div key={index} className={`relative ${imageStyle} 3xl:max-h-[30rem] 4xl:max-h-[35rem] 5xl:max-h-[40rem]`}>
          <Image src={item} alt='' layout="fill" objectFit='contain' />
        </div>
      </>
      ))}
    </div>
  )
}

export default ImageGroup