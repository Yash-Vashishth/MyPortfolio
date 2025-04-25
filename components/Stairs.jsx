import React from 'react'
import { motion } from 'motion/react';

//variants
const stairAnimation = {
    initial: {
        top: "0%",
        opacity: 1,
    },
    animate: {
        top: "100%",
        opacity: 0,
    },
    exit: {
        top: ["100%", "0%"],
        opacity: 0,
    },
};

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {/* render 6 motion devs each representing a stair step
            Each div will have the same animation defined by stairsAnimation Effect.
            The delay for each div is calculated sinomically based on its reversed 
            creating a staggered effect wit decreasing delay for each subsequent step  
            */}

            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1,
                        }}
                        className="h-full w-full bg-white absolute"
                    />)
            })}

        </>
    );
};

export default Stairs