"use client"

import React from 'react'
import SectionHeading from './section-heading'
import Image from 'next/image'
import { useSectionInView } from '@/lib/useInView'

//Animation
import { motion } from "framer-motion"
import { Fade } from 'react-awesome-reveal'

const About = () => {
  const { ref } = useSectionInView("#about")

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
      className='max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28'
    >
      <div className='container mx-auto'>
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
          <SectionHeading>
            About Me
          </SectionHeading>
        </Fade>

        <div className='grid xl:grid-cols-2 lg:text-start'>
          <div className='flex-1'>
            <div className='text-lg mt-12 xl:mt-3'>
              <div className='flex justify-start flex-col'>
                <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                  <h3 className='font-bold mt-6'>💻 Full-Stack Developer</h3>
                </Fade>
                <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
                  <p className='mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70'>
                    Hey there! I'm Nikhil Rai, a dedicated full-stack developer with a love for creating seamless and interactive web experiences. From designing intuitive front-end interfaces to building robust back-end systems, I enjoy every step of the development process. When I'm not coding, you'll find me exploring new tech, playing games, or brainstorming new project ideas. Let's build something amazing together! 🚀
                  </p>
                </Fade>
                
                {/* <h3>🎯 My Mission</h3>
                <p>
                  To craft innovative and user-friendly web solutions that make everyday tasks easier and more enjoyable. I aim to bridge the gap between technology and people by delivering efficient and scalable digital products.
                </p>

                <h3>🌍 My Vision</h3>
                <p>
                  To be at the forefront of web development, continuously learning and evolving with new technologies, and contributing to a future where technology empowers creativity and collaboration.
                </p> */}
              </div>
            </div>
          </div>

          {/* Right Image */}

          <Image
            src="/about.png"
            alt='About me'
            width="600"
            height="600"
            priority={true}
            className='rounded-full mt-8 object-cover'
          />
        </div>
      </div>
    </motion.section>
  )
}

export default About