import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

interface SwitchProps {
    activeButton: React.ReactNode;
    hiddenButton: React.ReactNode;
    setActiveButton: () => void;
}

export default function Switch({
    activeButton,
    hiddenButton,
    setActiveButton,
}: SwitchProps) {
    const [isHovered, setIsHovered] = useState(false);

    const switchVariants = {
        visible: { scale: 1, opacity: 0.7, y: 0 },
        hover: { scale: 1.2 },
        hidden: { scale: 0.5, opacity: 0, y: 50 }
    }

    return (
        <div>
            <AnimatePresence>
                {isHovered && (
                    <motion.button
                        key="languageSwitcher"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={switchVariants}
                        transition={{ duration: 0.3 }}
                        className='hidden md:flex items-center justify-center w-[2rem] h-[2rem] border  mb-4 ml-1.5 border-slate-400 dark:border-white border-opacity-40 shadow-2xl rounded-full dark:bg-green-950'
                    >
                        <p className="text-sm font-semibold">{hiddenButton}</p>
                    </motion.button>
                )}
            </AnimatePresence>

            <motion.button
                className='bg-white w-[3rem] h-[3rem] drop-shadow backdrop-blur-[0.5rem] border border-slate-400 dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-green-950'
            variants={switchVariants}
            initial="visible"
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={setActiveButton}
            >
                <p className='font-semibold'>{activeButton}</p>
            </motion.button>
        </div>
    )
}