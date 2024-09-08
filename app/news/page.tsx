import React from 'react'

const NewsPage = () => {
  const paperlinkStyle = "font-[400] italic text-sky-500"
  const paperlinkInView = ""

  const dateStyle = "inline-block bg-slate-200 text-slate-800 h-full rounded-md px-2 mr-2"
  return (
    <div className='px-body1'>


      <div>
        <span className={`${dateStyle}`}>
          2024-08
        </span>
        Purdue Research Foundation promotes our &apos;RAPTOR&apos; work here: &apos;AI-powered optical detection could tackle fake chips&apos;.
        <a className={`${paperlinkStyle}`}
          href='https://www.securingindustry.com/electronics-and-industrial/ai-powered-optical-detection-tackles-fake-chips/s105/a16228/'>
          [News]
        </a>
      </div>

      <div className='mt-3'>
        <span className={`${dateStyle}`}>
          2024-07
        </span>
        Our work featured by SPIE news, titled &apos;AI-powered optical detection to thwart counterfeit chips, researchers developed a robust optical anticounterfeit method for semiconductor devices&apos;.
        <a className={`${paperlinkStyle}`}
          href='https://spie.org/news/ai-powered-optical-detection-to-thwart-counterfeit-chips#_=_'>
          [News]
        </a>
      </div>

      <div className='mt-3'>
        <span className={`${dateStyle}`}>
          2024-07
        </span> Really excited to share our latest publication &apos;Authentication through residual attention-based processing of tampered optical responses&apos;, in Advanced Photonics (20.6 impact factor) special issue: AI and Photonics.
        <a className={`${paperlinkStyle}`}
          href='https://www.spiedigitallibrary.org/journals/advanced-photonics/volume-6/issue-05/056002/Authentication-through-residual-attention-based-processing-of-tampered-optical-responses/10.1117/1.AP.6.5.056002.full?tab=ArticleLink'>
          [Paper]
        </a>
      </div>

      <div className='mt-3'>
        <span className={`${dateStyle}`}>
          2024-07
        </span>
        Glad to present our generative AI work &apos;Topological latent diffusion model-assisted meta-atom design&apos; at this years&apos; Gordon Research Conference in Plasmonics and Nanophotonics at Maine. People enjoy European Championship soccer game when doing poster session.
      </div>


      <div className='mt-3'>
        <span className={`${dateStyle}`}>
          2024-05
        </span> Second time come to Santa Fe for this year&apos;s DOE Quantum Science Center (QSC) All-Hands meeting. Great opportunity to present nation-wide researchers with our work in &apos;Empowering quantum devices with generative AI-topological latent diffusion model&apos;.
      </div>
      <div className='mt-3'>
        <span className={`${dateStyle}`}>
          2023-12
        </span> Our insightful review paper &apos;Designing metasurfaces for efficient solar energy conversion&apos; is online as part of ACS Photonics virtual special issue “Photonics for Energy”.
      </div>
    </div>
  )
}

export default NewsPage
