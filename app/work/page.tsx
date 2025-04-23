"use client"

import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from 'react';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    num: '01',
    category: 'fullstack',
    title: 'Picto-Text',
    description: "The perfect SaaS based based Text-to-Image Generator",
    stack: [{ name: "MongoDb" }, { name: "Express.js" }, { name: "React" }, { name: "Node.js" }, { name: "TailwindCSS" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "picto-text-frontend.onrender.com/",
    github: "https://github.com/Yash-Vashishth/Picto-Text",
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'ProDab',
    description: "The Perfect Website Builder and Project Management Dashboard",
    stack: [{ name: "Next.js" }, { name: "Bun" }, { name: "Prisma" }, { name: "Stripe" }, { name: "MySQL" }, { name: "Javascript" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/Yash-Vashishth/contractor",
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Yash Vashishth Portfolio',
    description: "The intro to a soon-to-be highly sought after person",
    stack: [{ name: "Next.js" }, { name: "Node.js" }, { name: "TailwindCSS" }, { name: "Framer Motion" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/Yash-Vashishth/MyPortfolio",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >

      <div className='container max-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div>text</div>
          <div>slider</div>
        </div>
      </div>

    </motion.section>
  )
}

export default Work