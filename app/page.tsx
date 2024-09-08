
import ImageGroup from '@/components/image_group';
import TitleOne from '@/components/title-one';
import Image from 'next/image';
import { FaEnvelope, FaGithub, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
const profileImgUrl = `${process.env.NEXT_PUBLIC_BASE_PATH}/home/profile.jpg`;
const microsoft = `${process.env.NEXT_PUBLIC_BASE_PATH}/home/microsoft.png`;
const QuEra = `${process.env.NEXT_PUBLIC_BASE_PATH}/home/QuEra.png`;
const oka = `${process.env.NEXT_PUBLIC_BASE_PATH}/home/oka.png`;

const imgGroup2 = [microsoft, QuEra, oka]

// Main HomePage Component
export default function HomePage() {

  return (
    <div className='px-body1'>
      <div className="flex mt-[2rem]">
        <div className="w-[22rem] mr-[2rem]">
          <ContactInfo />
        </div>
        <div className=' flex items-center'>   {/* divider */}
          <div className='w-[2px] h-[20rem] max-h-[100%] bg-gray-200'></div>
        </div>
        <div className="ml-[2rem] flex-grow px-4">
          <About />
        </div>
      </div>
      <div className=''>
        <EducationPart />
      </div>

      <div className='mt-[4rem]'>
      <TitleOne title='Collabrations'/>
      <ImageGroup imgGroup={imgGroup2}/>
      </div>
    </div>
  );
}


// const imgGroup=[profileImgUrl, KLA_c]

function ContactInfo() {


  const email = "chen4114@purdue.edu";
  const github = "https://github.com/NanoMetaML";
  const googleScholar = "https://scholar.google.com/citations?user=yourID";
  const linkedinUrl = "linkedin.com/in/yh-chen-purdue/"


  return (
    <div className="container ">
      <div className="w-[12rem] h-[15rem] overflow-hidden relative ">
        <Image
          src={profileImgUrl}
          alt="Profile Picture"
          layout="fill"  // Let the image fill the container
          objectFit="cover"  // Cover the entire div without stretching the image
          className="rounded-[2rem]"
        />
      </div>


      <p className='text-center my-2'>Yuheng Chen</p>

      {/* <h1 className="text-xl font-bold mb-4">Contact Information</h1> */}
      <div className="space-y-2">
        <div className='flex items-center gap-2'>
          <FaEnvelope /> <a href={`mailto:${email}`} className="text-blue-500 hover:text-blue-700">{email}</a>
        </div>
        <div className='flex items-center gap-2'>
          <FaGithub /> <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">github.com/NanoMetaML</a>
        </div>
        <div className='flex items-center gap-2'>
          <FaGoogle /> <a href={googleScholar} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Google Scholar</a>
        </div>
        <div className='flex items-center gap-2'>
          <FaLinkedinIn /> <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Linkedin @ yh-chen-purdue</a>
        </div>
      </div>
    </div>
  );
}

// About Section
function About() {
  return (
    <div className="container ">
      <div className="text-xl font-bold ">Hi, I am Yuheng Chen!</div>
      <p className='font-[600]'>I&apos;m actively looking for full-time internship opportunities for 2025 summer!</p>
      <ul className='italic text-sm text-slate-500'>
        <li>AI + Optics/Photonics + Semiconductor</li>
        <li>PhD Candidate / NanoML Team Leader @ Purdue ECE </li>
        <li>Ex ML Algorithm Engineer Intern @ KLA</li>
      </ul>
      <p className="text-gray-600">
        I am a PhD candidate in the School of Electrical and Computer Engineering at Purdue University, where I contribute to the groundbreaking research in

        <a className='text-blue-600 italic' href='https://engineering.purdue.edu/~shalaev/index.php'>
          Vladimir M. Shalaev, Alexandra Boltasseva, and Alexander V. Kildishev&apos;s joint Research Group.
        </a>

        I am also leading the <a className='text-blue-600 italic' href='https://nanoml.org/'>NanoML team</a> (Nanophotonics Machine Learning team) comprising 15 Purdue postgraduate and undergraduate researchers.
        My academic journey focuses on inverse design-based optics/photonics device optimizations, including machine learning algorithm development and simulation analysis.
        This journey has led me to coauthor <a className='text-blue-600 italic' href='https://scholar.google.com/citations?hl=en&user=NI8OimMAAAAJ&view_op=list_works&gmla=AJsN-F4YF1IEkUNiR5fd-TH5_-qhpgK6Axq_GvOmg5tj_-bC2ympUXms3VA_1B9E3z6JPQ_UVVXNNTiVdu6CzFtbaZ72OHMPN3kRNP1AyN6bGaPHNp7NaBo'> high-impact papers</a>, significantly advancing our understanding of these cutting-edge topics.
        My research collaborators include scientists and engineers from Microsoft, QuEra, and Oak Ridge National Lab.
        As an ex-ML Algorithm Engineer Intern at KLA, I incorporated the novel deep learning tech into traditional EM computing, to inject vitality into the semiconductor industry&apos;s transformation in the AI era. Integral to my experience are skills in numerical simulation, nanofabrication, data analysis, and image processing, which have been crucial in my both academic and industrial endeavors.

      </p>
    </div>
  );
}

// Services Section
function EducationPart() {
  const educationList = [
    {
      school: 'Purdue University',
      location: 'IN, US',
      startYear: '08/2021',
      endYear: 'present',
      honor: 'Ross Fellowship | President of Purdue IEEE Photonics Society Student Chapter | Vice President of Purdue SPIE Student Chapter',
      degree: 'Ph.D. in Electrical and Computer Engineering'
    },
    {
      school: 'University of Science and Technology of China (USTC)',
      location: 'China',
      startYear: '09/2018',
      endYear: '06/2021',
      honor: '',
      degree: 'M.S. in Optical Engineering (Honor) '
    },
    {
      school: 'Hohai University',
      location: 'China',
      startYear: '09/2014',
      endYear: '06/2018',
      honor: '',
      degree: 'B.S. in Mechanical Engineering and Automation (Honor)'
    }
  ];
  return (
    <div className=" mt-10 ">
      <div className="education-container">
        <TitleOne title='Education' />
        {educationList.length > 0 ? (
          educationList.map((edu, index) => (
            <div key={index} className="education-entry">
              <div className='flex justify-between'>
                <div>
                  <strong>{edu.school}, </strong> <i>{edu.location}</i>
                  <span> ({edu.degree})</span>
                </div>
                <span> {edu.startYear} - {edu.endYear}</span>
              </div>
              <div></div>
              {edu.honor && <p>{edu.honor}</p>}
            </div>
          ))
        ) : (
          <p>No education information available.</p>
        )}
      </div>
    </div>
  );
}

