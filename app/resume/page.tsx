"use client"
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss,SiNextdotjs,SiExpress,SiMongodb } from 'react-icons/si';
import React from 'react'

//about data
const about = {
  title: "About Me",
  description: " An aspiring MERN stack developer focused on delivering impactful results, eager to tackle dynamic challenges and dedicated to building user friendly solutions. Demonstrated proficiency in public speaking and creative writing along with analytic and problem solving skills. An avid Open Source contributor who progresive thinking skills, and excellent collaboration across teams.",
  info: [
    {
      fieldname: "Name",
      fieldValue:"Yash Vashishth",
    },
    {
      fieldname: "Phone",
      fieldValue:"(+91) 97739 34261",
    },
    {
      fieldname: "Experience",
      fieldValue:" Fresher",
    },
    {
      fieldname: "Nationality",
      fieldValue:"Indian",
    },
    {
      fieldname: "Email",
      fieldValue:"imyashvashishth05@gmail.com",
    },
    {
      fieldname: "Freelance",
      fieldValue:"Available",
    },
    {
      fieldname: "Languages",
      fieldValue:"English , Hindi , Japanese",
    },
  ]
};

//experience data   ---->GET REQUIRED EXPERIENCE FIRST <----
//const experience = {
//  icon: '/assets/resume/badge.svg',
//  title: 'My experience',
//  description: '',
//  items: [
//    {
//      company: "",
//      position: "",
//      duration: "",
//    }
//  ]
//}

//education data

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'I had a fantastic school record with my achievements that are listed below',
  items: [
    {
      institution : "Maharaja Surajmal Institute of Technology",
      degree: "Bachelor of Technology",
      duration: "2023-Present",
    },
    {
      institution : "Delhi Public School R.K. Puram",
      degree: "Class XII",
      duration: "2022-2023",
    },
    {
      institution : "Maharaja Surajmal Institute of Technology",
      degree: "Class X",
      duration: "2020-2021",
    },
  ]
}

//skills data
const skills = {
  title: 'My skills',
  description: 'Check out the skills that make so good !!',
  skilllist: [
    {
      icon: <FaHtml5 />,
      degree: "html 5",
    },
    {
      icon: <FaCss3 />,
      degree: "css 3",
    },
    {
      icon: <FaJs />,
      degree: "javascript",
    },
    {
      icon: <FaReact />,
      degree: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      degree: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      degree: "tailwind.css",
    },
    {
      icon: <SiExpress />,
      degree: "express.js",
    },
    {
      icon: <SiMongodb />,
      degree: "mongodb",
    },
    {
      icon: <FaNodeJs />,
      degree: "node.js",
    },
    {
      icon: <FaFigma />,
      degree: "figma",
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '../../components/ui/tooltip';
import { ScrollArea } from '../../components/ui/scroll-area';
import { motion } from 'motion/react';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {/*<TabsTrigger> Experience </TabsTrigger>*/}
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>

            {/*experience*/}
            <TabsContent value="experience" className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232349] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            {/*dot*/}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            

            {/*education*/}
            <TabsContent value="education" className='w-full'>
              education
            </TabsContent>

            {/*skills*/}
            <TabsContent value="skills" className='w-full'>
              skills
            </TabsContent>

            {/*about me*/}
            <TabsContent value="about" className='w-full'>
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
