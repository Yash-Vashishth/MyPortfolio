"use client";

import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

//components
import Stairs from './Stairs';

const StairTransition = () => {
  const pathname = usePathname();
  const [showStairs, setShowStairs] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowStairs(false);
    }, 1000); // Total animation time (adjust if needed)

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        {showStairs && (
          <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
            <Stairs />
          </div>
        )}

        <motion.div
          className='h-screen w-screen fixed bg-primary top-0 pointer-events-none z-30'
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" }
          }}
        />
      </div>
    </AnimatePresence>
  );
}

export default StairTransition;