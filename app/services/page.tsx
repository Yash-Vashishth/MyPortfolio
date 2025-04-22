"use client"
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import React from 'react';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: "Create engaging and lively website content that allows user-experience to the maximum",
    href: " ",
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: "Create webpage designs using Figma and the likes of the tools to give shape to modern, interactive and fun webpages",
    href: " ",
  },
  {
    num: '03',
    title: 'Logo Design',
    description: "Create unique designs and logos that demonstrate the individuality that can be portrayed throughout my career",
    href: " ",
  },
  {
    num: '04',
    title: 'Technical Content Analysis/Writing',
    description: "Analyze existing content, visuals and designs and suggest workable, effective and easy solutions to help in the growth of the receiving end",
    href: " ",
  },
];

import { motion } from "motion/react";



const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/*top*/}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl "/>
                  </Link>
                </div>

                {/*heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>

                {/*description*/}
                <p className="text-white/60 ">{service.description}</p>
                
                {/*border*/}
                <div className="border-b border-white/20 w-full "></div>
              </div>
            )          
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services