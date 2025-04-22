"use client"
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss,SiNextdotjs,SiExpress,SiMongodb } from 'react-icons/si';
import React from 'react'

//about data
const about = {
  title: "About Me",
  description: " An aspiring full stack developer focused on delivering impactful results, eager to tackle dynamic challenges and dedicated to building user friendly solutions. Demonstrated proficiency in public speaking and creative writing along with analytic and problem solving skills. An avid Open Source contributor who progresive thinking skills, and excellent collaboration across teams.",
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
      fieldValue:"Fresher",
    },
    {
      fieldname: "Nationality",
      fieldValue:"Indian",
    },
    {
      fieldname: "Freelance",
      fieldValue:"Available",
    },
    {
      fieldname: "Languages",
      fieldValue:"English , Hindi , Japanese",
    },
    {
      fieldname: "Email",
      fieldValue:"imyashvashishth05@gmail.com",
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
  description: 'These skills are the important ones that I  have acquired during my career period. These are something I have put hours into learning these skills and believe they will be of use to me and my workplace',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
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
             {/*<TabsContent value="experience" className='w-full'>*/}
              {/*<div className='flex flex-col gap-[30px] text-center xl:text-left'>*/}
                {/*<h3 className='text-4xl font-bold'>{experience.title}</h3>*/}
                {/*<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>*/}
                {/*<ScrollArea className='h-[400px]'>*/}
                  {/*<ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>*/}
                     {/*{experience.items.map((item, index) => {*/}
                      {/*return ( */}
                        {/*<li key={index} className='bg-[#232349] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>*/}
                          {/*<span className='text-accent'>{item.duration}</span>*/}
                          {/*<h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>*/}
                          {/*<div className='flex items-center gap-3'>*/}
                            {/*dot*/}
                            {/*<span className='w-[6px] h-[6px] rounded-full bg-accent'></span>*/}
                            {/*<p className='text-white/60'>{item.company}</p>*/}
                          {/*</div>*/}
                        {/*</li>*/}
                      {/*)*/}
                    {/*})}*/}
                  {/*</ul>*/}
                {/*</ScrollArea>*/}
              {/*</div>*/}
            {/*</TabsContent>*/}
            

            {/*education*/}
            <TabsContent value="education" className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return ( 
                        <li key={index} className='bg-[#232349] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            {/*dot*/}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*skills*/}
            <TabsContent value="skills" className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232349] rounded-xl flex justify-center items-center group'><div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div></TooltipTrigger>
                            <TooltipContent><p className='capitalize'>{skill.name}</p></TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )                    
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*about me*/}
            <TabsContent value="about" className='w-full text-center xl:test-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item,index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldname}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
