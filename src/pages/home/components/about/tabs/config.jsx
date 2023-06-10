import React from 'react'
import {
  DiReact, DiAngularSimple,
  DiJava, DiJavascript1
} from 'react-icons/di'
import { IoLogoNodejs } from 'react-icons/io'
import {
  SiFlask, SiPython, SiExpress, SiTypescript, SiDocker
} from 'react-icons/si'

const iconSize = 50

const mainSkills = [
  {
    title: 'Web Development',
    exp: '2 years',
    description: 'React, Angular, Node.js, JavaScript, Typescript, etc'
  },
  {
    title: 'Software Development',
    exp: '1 years',
    description: 'Java, Python,'
  }
]

const experience = [
  {
    title: 'Angular Freelance',
    company: 'Self',
    timeline: 'Sep 2022 - Present'
  },
  {
    title: 'React Developer',
    company: 'Braincells',
    timeline: 'Jan 2022 - April 2022'
  },
  {
    title: 'Javascript Developer',
    company: 'Techax labs',
    timeline: 'Aug 2020- Oct 2020'
  }
]
const education = [
  {
    title: 'Bachelor of Engineering',
    school: 'Sinhgad College Of Engineering, Vadgaon, Pune',
    description: 'Information Technology',
    graduation: 'June 2023'
  },
  {
    title: '12th',
    school: 'Holy Mission Secondary School',
    description: '[CBSE]-Computer, Physics, Chemistry, Mathematics, etc',
    graduation: 'June 2019'
  },
  {
    title: '10th',
    school: 'Don Bosco Academy, Patna',
    description: ' [ICSE]-Computer, Science, Mathematics, etc',
    graduation: 'June 2017'
  }
]
const skills = [
  {
    name: 'React',
    icon: <DiReact size={iconSize} />
  },
  {
    name: 'Angular',
    icon: <DiAngularSimple size={iconSize} />
  },
  {
    name: 'Node.js',
    icon: <IoLogoNodejs size={iconSize} />
  },
  {
    name: 'Express',
    icon: <SiExpress size={iconSize} />
  },
  {
    name: 'Docker',
    icon: <SiDocker size={iconSize} />
  },
  {
    name: 'Flask',
    icon: <SiFlask size={iconSize} />
  },
  {
    name: 'Python',
    icon: <SiPython size={iconSize} />
  },
  {
    name: 'java',
    icon: <DiJava size={iconSize} />
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={iconSize} />
  },
  {
    name: 'Javascript',
    icon: <DiJavascript1 size={iconSize} />
  }

]
export {
  mainSkills, experience, education, skills
}
