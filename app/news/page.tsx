"use client";
import { useEffect, useState } from 'react';
import { Divider } from 'antd';
import Image from 'next/image';
import React from 'react'

const RAPTOR_2024_08 = `${process.env.NEXT_PUBLIC_BASE_PATH}/news/RAPTOR_2024_08.jpg`;
const AP_news_2024_07 = `${process.env.NEXT_PUBLIC_BASE_PATH}/news/AP_news_2024_07.png`;
const SPIE_news_2024_07 = `${process.env.NEXT_PUBLIC_BASE_PATH}/news/SPIE_news_2024_07.png`;
const maine_2024_07 = `${process.env.NEXT_PUBLIC_BASE_PATH}/news/maine_2024_07.jpg`;
const Quantum_sci_center_2024_05 = `${process.env.NEXT_PUBLIC_BASE_PATH}/news/Quantum_sci_center_2024_05.png`;
const photonics_design_2013_12 = `${process.env.NEXT_PUBLIC_BASE_PATH}/news/photonics_design_2013_12.png`;


const NewsPage = () => {
  const paperlinkStyle = "font-[400] italic text-sky-500"
  const paperlinkInView = ""

  const dateStyle = "inline-block bg-slate-200 text-slate-800 h-full rounded-md px-2 mr-2"
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize() // Check on mount

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
   
    <div className={`${isMobile ? "px-mobile":"px-body1  3xl:text-[1.2rem] 4xl:text-[1.4rem] 5xl:text-[1.6rem]"}`}>


      <div className='news-piece mt-5'>
        <span className={`${dateStyle}`}>
          2024-08
        </span>
        <a
          href='https://www.securingindustry.com/electronics-and-industrial/ai-powered-optical-detection-tackles-fake-chips/s105/a16228/'>
          <span className={`hover:underline`}>
            Purdue Research Foundation promotes our &apos;RAPTOR&apos; work here: &apos;AI-powered optical detection could tackle fake chips&apos;.
          </span>
          <span className={`${paperlinkStyle}`}>[News]</span>

        </a>

        <div className='relative h-[15rem] flex mt-2'>
          <Image src={RAPTOR_2024_08} alt='' layout="fill" objectFit='contain' objectPosition='left' />
        </div>
        <Divider  variant="dashed" style={{  borderColor: '#7cb305' }} dashed />
      </div>

      <div className='news-piece mt-5'>
        <span className={`${dateStyle}`}>
          2024-07
        </span>
        <a
          href='https://spie.org/news/ai-powered-optical-detection-to-thwart-counterfeit-chips#_=_'>
          <span className={`hover:underline`}>
            Our work featured by SPIE news, titled &apos;AI-powered optical detection to thwart counterfeit chips, researchers developed a robust optical anticounterfeit method for semiconductor devices&apos;.

          </span>
          <span className={`${paperlinkStyle}`}>[News]</span>
        </a>
        <div className='relative h-[15rem] mt-2'>
          <Image src={SPIE_news_2024_07} alt='' layout="fill" objectFit='contain' objectPosition='left' />
        </div>
        <Divider  variant="dashed" style={{  borderColor: '#7cb305' }} dashed />
      </div>

      <div className='news-piece mt-5'>
        <span className={`${dateStyle}`}>
          2024-07
        </span>
        <a
          href='https://www.spiedigitallibrary.org/journals/advanced-photonics/volume-6/issue-05/056002/Authentication-through-residual-attention-based-processing-of-tampered-optical-responses/10.1117/1.AP.6.5.056002.full?tab=ArticleLink'>
          <span className={`hover:underline`}>
            Really excited to share our latest publication &apos;Authentication through residual attention-based processing of tampered optical responses&apos;, in Advanced Photonics (20.6 impact factor) special issue: AI and Photonics.

          </span>
          <span className={`${paperlinkStyle}`}>[Paper]</span>
        </a>
        <div className='relative h-[15rem] mt-2'>
          <Image src={AP_news_2024_07} alt='' layout="fill" objectFit='contain' objectPosition='left' />
        </div>
        <Divider  variant="dashed" style={{  borderColor: '#7cb305' }} dashed />
      </div>

      <div className='news-piece mt-5'>
        <span className={`${dateStyle}`}>
          2024-07
        </span>
        Glad to present our generative AI work &apos;Topological latent diffusion model-assisted meta-atom design&apos; at this years&apos; Gordon Research Conference in Plasmonics and Nanophotonics at Maine. People enjoy European Championship soccer game when doing poster session.
        <div className='relative h-[15rem] mt-2'>
          <Image src={maine_2024_07} alt='' layout="fill" objectFit='contain' objectPosition='left' />
        </div>
        <Divider  variant="dashed" style={{  borderColor: '#7cb305' }} dashed />
      </div>


      <div className='news-piece mt-5'>
        <span className={`${dateStyle}`}>
          2024-05
        </span> Second time come to Santa Fe for this year&apos;s DOE Quantum Science Center (QSC) All-Hands meeting. Great opportunity to present nation-wide researchers with our work in &apos;Empowering quantum devices with generative AI-topological latent diffusion model&apos;.
        <div className='relative h-[15rem] mt-2'>
          <Image src={Quantum_sci_center_2024_05} alt='' layout="fill" objectFit='contain' objectPosition='left' />
        </div>
        <Divider  variant="dashed" style={{  borderColor: '#7cb305' }} dashed />
      </div>
      <div className='news-piece mt-5'>
        <span className={`${dateStyle}`}>
          2023-12
        </span>
        Our insightful review paper &apos;Designing metasurfaces for efficient solar energy conversion&apos; is online as part of ACS Photonics virtual special issue “Photonics for Energy”.
        <div className='relative h-[15rem] mt-2'>
          <Image src={photonics_design_2013_12} alt='' layout="fill" objectFit='contain' objectPosition='left' />
        </div>
        {/* <Divider  variant="dashed" style={{  borderColor: '#7cb305' }} dashed /> */}
      </div>
    </div>
  )
}

export default NewsPage
