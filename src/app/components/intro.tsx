import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { Mail } from 'lucide-react'

export default function Intro() {
    return (
        <section
         className='mb-28 max-w-[75rem] text-center sm:mb-0 pb-2'
        >
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <div>
                        <Image
                            src="/boy.png"
                            width="480"
                            height="480"
                            alt='portrait'
                            quality='100'
                            priority={true}
                            className='rounded-full shadow-xl object-cover'
                        />
                    </div>
                    <span
                        className='text-6xl absolute bottom-8 right-12'
                    >
                        👋
                    </span>
                </div>
            </div>

            <h1 className='mb-10 mt-4 text-2xl sm:text-4xl'>
                <span className='font-medium !leading-[1.5]'>Hi, I'm Nikhil Rai. A Fullstack Web Developer based in India.</span>{" "}
                <p className='text-[14px]'>
                    Hi, I'm Nikhil, a full-stack developer skilled in building dynamic, user-friendly web applications. I love turning ideas into reality with clean, efficient code.
                </p>
            </h1>

            <div
            className='flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
            >
                <Link
                 href="#"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
                 >
                    Connect <Mail color={"#9ca3af"}/>
                </Link>

                <a className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" href="#" target='blank'>
                    <BsLinkedin />
                </a>

                <a className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" href="#" target='blank'>
                    <FaGithubSquare />
                </a>
            </div>
        </section>
    )
}