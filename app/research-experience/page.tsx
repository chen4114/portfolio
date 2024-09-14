"use client";
import { useEffect, useState } from 'react';
import TechIcons from '@/components/skill-icons'
import TitleOne from '@/components/title-one'
import React from 'react'
import ImageGroup from '@/components/image_group';


const Research_1 = `${process.env.NEXT_PUBLIC_BASE_PATH}/research-experience/Research_1.png`;
const Research_3 = `${process.env.NEXT_PUBLIC_BASE_PATH}/research-experience/Research_3.png`;
const Research_5 = `${process.env.NEXT_PUBLIC_BASE_PATH}/research-experience/Research_5.jpg`;
const Research_7 = `${process.env.NEXT_PUBLIC_BASE_PATH}/research-experience/Research_7.png`;
const Research_2 = `${process.env.NEXT_PUBLIC_BASE_PATH}/research-experience/Research_2.png`;
const Research_4 = `${process.env.NEXT_PUBLIC_BASE_PATH}/research-experience/Research_4.png`;
const Research_6 = `${process.env.NEXT_PUBLIC_BASE_PATH}/research-experience/Research_6.png`;
const Research_8 = `${process.env.NEXT_PUBLIC_BASE_PATH}/research-experience/Research_8.jpeg`;
const Research_9 = `${process.env.NEXT_PUBLIC_BASE_PATH}/research-experience/Research_9.jpeg`;
const imgGroup1 =[Research_1, Research_2, Research_3, Research_4]

const imgGroup2 =  [Research_5, Research_6, Research_7]
const imgGroup3 =  [Research_8, Research_9]


const paperlinkStyle = "font-[400] italic text-sky-500"
const paperlinkInView = ""

const ResearchPage = () => {
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
    <div className={`${isMobile ? "px-mobile":"px-body1"}`}>
      <div className='Machine learning for device optimization mt-2'>
        <TitleOne title={"Machine learning for device optimization"} >
          <span className='text-sky-600 italic flex pt-1'>
            &nbsp; (collaborated with Microsoft, QuEra, and Oak Ridge National Lab)
          </span>
        </TitleOne>

        <div className='flex  mt-3'>
          <span className="inline-block bg-sky-900 text-white h-full rounded-md px-2 mr-2">Skills:</span>
          <TechIcons skills={"Python, PyTorch, Photonics Simulation (Comsol & Lumerical), Deep Learning, Quantum Computation, Large Language Model (LLM)"} />
        </div>

        <div className='text-gray-600 px-4 py-2 my-4 border-l-[4px] border-l-gray-300'>
          We present using machine learning/quantum computing forcharacterization, fabrication, and inverse design of device applications, such as adjoint simulation, generative model-assisted design, hybrid quantum-classical optimization, LLM model-embedded multimodal training.
        </div>

        <ImageGroup imgGroup={imgGroup1.slice(0,2)}/>
        <ImageGroup imgGroup={imgGroup1.slice(2)}/>
        <div className='Projects '>

          <ul className='Project1'>
            <p>
              <span className="inline-block bg-slate-200 text-slate-800 h-full rounded-md px-2 mr-2">Project 1:</span>
              Advancing photonic design with topological latent diffusion generative model
            </p>

            <li>
              • Developed topology optimization (TO) based deep generative model: Topological Latent Diffusion Model (TLDM), to realize high-quality inverse design.
            </li>
            <li>
              • Applied efficiency prediction model-embedded conditional U-net and demonstrated substantial efficiency improvement compared with state-of-the-art generative model benchmarks.
            </li>
          </ul>
          <ul className='Project2'>

            <p>
              <span className="inline-block bg-slate-200 text-slate-800 h-full rounded-md px-2 mr-2">Project 2:</span>
              Variational neural annealing for latent polynomial unconstrained binary optimization (PUBO) in device design
            </p>

            <li>
              • Mapped device optimization problem into latent PUBO energy model to enforce the combinatorial optimization problem to the data optimization problem.
            </li>
            <li>
              • Introduced variational neural annealing implemented through recurrent neural networks (RNNs) to solve PUBO, significantly outperformed simulated annealing and quantum annealing on sampling time and device efficiency.
            </li>
          </ul>

          <ul className='Project3'>
            <p>
              <span className="inline-block bg-slate-200 text-slate-800 h-full rounded-md px-2 mr-2">Project 3:</span>
              Multimodal model for prompt-guided integrated photonics design

            </p>
            <p>
              • Combined with ChatGPT API with the packaged trained model to realize an interactive LLM-empowered prompt-guided photonics design interface.
            </p>
            <p>
              • Utilized stable diffusion model for a device feature description text-device topology image multimodal dual-training.
            </p>
          </ul>

        </div>
        <ul className='publications mt-4'>
          <p>
            <span className="inline-block bg-sky-900 text-white h-full rounded-md px-2 mr-2">Publications:</span>
          </p>
          <li>
            1. M. Bezick†, <span className="font-[800]">Y. Chen†</span>, B. Wilson, A. V. Kildishev, V. M. Shalaev, and A. Boltasseva, &apos;Latent diffusion models for global optimization in inverse design&apos;, arxiv, Nature Communications,
            <span className={`${paperlinkInView}`}>in review</span>.
          </li>
          <li>
            2. M. Bezick, B. Wilson, V. Iyer, <span className="font-[800]">Y. Chen</span>, V. M. Shalaev, S. Kais, A. Boltasseva, and B. Lackey, &apos;Pearson-correlated variational neural annealing for latent PUBO optimization&apos;, arxiv, Advanced Optical Materials,
            <span className={`${paperlinkInView}`}>in review</span>.

          </li>
          <li>
            3. <span className="font-[800]">Y. Chen</span>, M. Bezick, B. Wilson, O. Yesilyurt, A. V. Kildishev, A. Boltasseva, and V. M. Shalaev, &apos;Advancing photonic design with topological latent diffusion generative model&apos;, Optica Frontiers in Optics + Laser Science Conference (2024).

          </li>
          <li>
            4. B. Wilson, <span className="font-[800]">Y. Chen</span>, V. Shalaev, A. Kildishev, and A. Boltasseva, &apos;Advancing nano- and quantum photonics with machine learning&apos;, International Conference on Metamaterials, Photonic Crystals and Plasmonics (2024).

          </li>
          <li>
            5. B. Wilson, <span className="font-[800]">Y. Chen</span>, S. Kais, A. Kildishev, V. Shalaev, and A. Boltasseva, &apos;Empowering quantum 2.0 devices and approaches with machine learning&apos;, Optica Quantum 2.0 Conference and Exhibition, QTu2A.13 (2022).
            <a className={`${paperlinkStyle}`}
              href='https://opg.optica.org/abstract.cfm?uri=QUANTUM-2022-QTu2A.13'>
              [Paper]
            </a>

          </li>
          <li>

            6. <span className="font-[800]">Y. Chen</span>, B. Wilson, A. Kildishev, V. Shalaev, and A. Boltasseva, &apos;Generative models for photonics device design and optimization&apos;,
            <span className={`${paperlinkInView} `}>in preparation</span>.

          </li>
        </ul>

      </div>
      <div className='Machine learning for semiconductor  mt-4'>

        <TitleOne title={"Machine learning for semiconductor"} />

        <div className='flex  mt-3'>
          <span className="block bg-sky-900 text-white h-full rounded-md px-2 mr-2">Skills:</span>
          <TechIcons skills={"Python, PyTorch, Computer Vision, Deep Learning, Image Segmentation, Data Augmentation"} />
        </div>

        <div className='text-gray-600 px-4 py-2 my-4 border-l-[4px] border-l-gray-300'>
          The global chip industry is grappling with dual challenges: a profound shortage of new chips and a surge of counterfeit chips valued at $75 billion, introducing substantial risks of malfunction and unwanted surveillance. To counteract this, we propose optical anti-counterfeiting methods for semiconductor devices that is robust under adversarial tampering features.

        </div>


        <ImageGroup imgGroup={imgGroup2}/>

        <ul>
          <p>
            <span className="inline-block bg-slate-200 text-slate-800 h-full rounded-md px-2 mr-2">Project 1:</span>
            Authentication in chip encryption through deep engine-based processing of tampered optical responses
          </p>
          <p>
            • Designed a RAPTOR (Residual, Attention-based Processing of Tampered Optical Response) discriminator for identifying adversarial tampering of an optical, physical unclonable function based on a random array of gold nanoProjecticles embedded in semiconductor packaging.
          </p>
          <p>
            • Extracted features of gold nanoProjecticles from 1000 dark-field images in just 27 ms and verified their authenticity using RAPTOR in 80 ms with 97.6% accuracy under difficult adversarial tampering conditions.
          </p>
        </ul>



        <ul className='publications mt-4'>
          <p>
            <span className="inline-block bg-sky-900 text-white h-full rounded-md px-2 mr-2">Publications:</span>

          </p>
          <li>
            1. B. Wilson†, <span className="font-[800]">Y. Chen†</span>, D. K. Singh, R. Ojha, J. Pottle, M. Bezick, A. Boltasseva, V. M. Shalaev, and A. V. Kildishev, &apos;Authentication through residual attention-based processing of tampered optical responses&apos;, <span className=''>Advanced Photonics</span>, 6(5), 056002-056002 (2024).

            <a className={`${paperlinkStyle}`}
              href='https://www.spiedigitallibrary.org/journals/advanced-photonics/volume-6/issue-05/056002/Authentication-through-residual-attention-based-processing-of-tampered-optical-responses/10.1117/1.AP.6.5.056002.full?tab=ArticleLink'>
              [Paper]
            </a>


          </li>
          <li>
            2. B. Wilson†, <span className="font-[800]">Y. Chen†</span>, D. K. Singh, R. Ojha, J. Pottle, M. Bezick, V. M. Shalaev, A. Boltasseva, and A. V. Kildishev, &apos;Machine learning assisted optical authentication of chip tampering&apos;, SPIE Optics + Photonics, Metamaterials, Metadevices, and Metasystems Conference, 13113-16 (2024).

          </li>
          <li>
            3. SPIE featured news on our work: &apos;AI-powered optical detection to thwart counterfeit chips, researchers developed a robust optical anticounterfeit method for semiconductor devices&apos;.
            <a className={`${paperlinkStyle}`}
              href='https://spie.org/news/ai-powered-optical-detection-to-thwart-counterfeit-chips#_=_'>
              [News]
            </a>
          </li>
        </ul>
      </div>
      <div className=' Nanophotonics and Nanofabrication (With USTC and ASU) mt-6'>



        <TitleOne title={"Nanophotonics and Nanofabrication (With USTC and ASU)"} />

        <div className='flex  mt-3'>
          <span className="block bg-sky-900 text-white h-full rounded-md px-2 mr-2">Skills:</span>
          <TechIcons skills={"Photonics Simulation (Comsol & Lumerical), Nanofabrication (cleanroom experience in process design & lithographing & etching & characterization), Python, Matlab"} />
        </div>

        <div className='text-gray-600 px-4 py-2 my-4 border-l-[4px] border-l-gray-300'>
          We demonstrate novel nanofabrication method for light-matter plasmonic enhancement based on 2D materials. Also explore metasurface designs for efficient solar energy conversion.

        </div>
        <ImageGroup imgGroup={imgGroup3}/>

        <ul>
          <p>
          <span className="inline-block bg-slate-200 text-slate-800 h-full rounded-md px-2 mr-2">Project 1:</span>
            Integrated 2D semiconductor light-emitting devices with plasmonic nanostructures

          </p>
          <li>
          </li>
          <li>
            • Realized first experimental transfer and emission characterization of 2D TMDs (Transition-metal dichalcogenides) on plasmonic nano-terrace morphology.
          </li>
          <li>
            • Generated 12-fold light emission enhancement with flexible manipulation feature, LSPR (Localized surface plasmon resonance) enhancement mechanism verified through FDTD simulation.
          </li>
        </ul>
        <ul>
          <p>
            <span className="inline-block bg-slate-200 text-slate-800 h-full rounded-md px-2 mr-2">Project 2:</span>
            Self-organized lithography-free nanodevice fabrication with tunable optical anisotropy

          </p>

          <li>
            • Implemented lithography-free nanofabrication method as team leader, realizing 3-fold aspect ratio promotion in self-organized metal co-deposition ion etching.
          </li>
          <li>
            • Demonstrated outstanding tunable optical anisotropy feature in polarization, fitting well with FDTD/RCWA simulation.
          </li>
        </ul>
        <ul className='publications mt-4'>
          <p>
            <span className="inline-block bg-sky-900 text-white h-full rounded-md px-2 mr-2">Publications:</span>

          </p>
          <li>1. L. Mascaretti, <span className="font-[800]">Y. Chen</span>, O. Henrotte, O. Yesilyurt, V. M. Shalaev, A. Naldoni, and A. Boltasseva, &apos;Designing metasurface for efficient solar energy conversion&apos;, ACS Photonics, 10(12), 4079-4103 (2023).
            <a className={`${paperlinkStyle}`}
              href='https://pubs.acs.org/doi/full/10.1021/acsphotonics.3c01013'>
              [Paper]
            </a>
          </li>
          <li>2. <span className="font-[800]">Y. Chen</span>, H. Li, M. Blei, M. Cai, H. Zang, Y. Lu, S. Tongay, and Y. Liu, &apos;Monolayer excitonic semiconductors integrated with Au quasi-periodic nanoterrace morphology on fused silica substrates for light-emitting devices&apos;, ACS Applied Nano Materials, 4, 84-93 (2021).
            <a className={`${paperlinkStyle}`}
              href='https://pubs.acs.org/doi/10.1021/acsanm.0c02386'>
              [Paper]
            </a>
          </li>
          <li>3. <span className="font-[800]">Y. Chen</span>, M. Cai, H. Zang, H. Chen, S. Kroker, Y. Lu, Y. Liu, F. Frost, and Y. Hong, &apos;Optical anisotropy of self-organized gold quasi-blazed nanostructures based on a broad ion beam&apos;, Applied Optics, 60, 505-512 (2021).
            <a className={`${paperlinkStyle}`}
              href='https://doi.org/10.1364/AO.412631'>
              [Paper]
            </a>
          </li>
          <li>4. <span className="font-[800]">Y. Chen</span>, M. Cai, K. Qiu, and Y. Hong, &apos;Optical anisotropy of metal nanowire arrays on fused silica surface&apos;, Proceedings of SPIE, 114271N (2020).
            <a className={`${paperlinkStyle}`}
              href='https://doi.org/10.1117/12.2551664'>
              [Paper]
            </a>
          </li>
          <li>5. M. Cai, Z. Chen, <span className="font-[800]">Y. Chen</span>, K. Qiu, X. Xu, and Y. Hong, &apos;Design of near-infrared resonance antenna array filters in termophotovoltaic application&apos;, Proceedings of SPIE, 114274E (2020).
            <a className={`${paperlinkStyle}`}
              href='https://doi.org/10.1117/12.2553233'>
              [Paper]
            </a>
          </li>
        </ul>
      </div>
      <div className='Talks and Presentations mt-6'>
        <TitleOne title={"Talks and Presentations"} />

        <ul>
          <li>
            1. &apos;Advancing photonic design with topological latent diffusion generative model&apos;, Optica Frontiers in Optics + Laser Science Conference (2024).
          </li>
          <li>
            2. &apos;Machine learning assisted optical authentication of chip tampering&apos;, SPIE Optics + Photonics, Metamaterials, Metadevices, and Metasystems Conference (2024).
          </li>
          <li>
            3. &apos;Topological latent diffusion model-assisted meta-atom design&apos;, Gordon Research Conference, Plasmonics and Nanophotonics (2024).
          </li>
          <li>
            4. &apos;Empowering quantum devices with generative AI-topological latent diffusion model&apos;, DOE Quantum Science Center (QSC) All-Hands meeting (2024).
          </li>
          <li>
            5. &apos;Empowering quantum 2.0 devices and approaches with machine learning&apos;, Optica Quantum 2.0 Conference and Exhibition (2022).
          </li>
        </ul>
      </div>

      <div className='Other Experiences mt-6'>

        <TitleOne title={"Other Experiences"} />

        <ul>
          <li>
            1. Reviewer for ACS Photonics, Nanophotonics, PNAS, et al.
          </li>
          <li>
            2. President of Purdue IEEE Photonics Society Student Chapter
          </li>
          <li>
            3. Vice President of Purdue SPIE Student Chapter
          </li>
        </ul>
      </div>


    </div>
  )
}

export default ResearchPage
