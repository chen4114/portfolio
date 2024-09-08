import React from 'react';
// Importing icons from react-icons
import { SiCplusplus, SiPython, SiPytorch, SiTensorflow, SiAnsys, SiAutodesk, SiComsol } from 'react-icons/si';
import { AiOutlineLineChart } from 'react-icons/ai';
import { FaBrain } from 'react-icons/fa';

const iconMap: Record<string, JSX.Element> = {
  'C/C++': <SiCplusplus title="C/C++" />,
  'Python': <SiPython title="Python" />,
  'PyTorch': <SiPytorch title="PyTorch" />,
  'TensorFlow': <SiTensorflow title="TensorFlow" />,
  'Regression Analysis': <AiOutlineLineChart title="Regression Analysis" />,
  'Deep Learning': <FaBrain title="Deep Learning" />,
  'Ansys': <SiAnsys title="Ansys" />,
  'Comsol': <SiComsol title="Comsol" />,
};

interface TechIconProp {
    skill: string;
}
interface TechIconsProp {
    skills: string;
}

const TechIcon: React.FC<TechIconProp> = ({ skill }) => {
  const icon = iconMap[skill];
  return (
    <div  className='flex items-center mx-4 gap-1'>
      {icon ? <span className='text-slate-500'>{icon}</span> :
      <span className='h-[80%] flex items-center text-center bg-slate-500 text-white rounded px-[2px]'>{skill.slice(0,2)}</span>
      }
      <p>{skill}</p>
    </div>
  );
};

const TechIcons: React.FC<TechIconsProp> = ({ skills }) => {
  return (
    <div className='' style={{ display: 'flex', flexWrap: 'wrap' }}>
      {skills.split(",").map((skill, index) => (
        <TechIcon key={index} skill={skill.trim()} />
      ))}
    </div>
  );
};

export default TechIcons;
