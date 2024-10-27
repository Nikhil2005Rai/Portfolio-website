"use client"

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useInView";
import SubmitBtn from "./submit-btn";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
    const { ref } = useSectionInView("#contact")
    return (
        <motion.section id="contact" ref={ref} className="mb-20">
            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                <SectionHeading>
                    {"Contact Me"}
                </SectionHeading>
            </Fade>

            <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                <p className="text-gray-700 -mt-6 dark:text-white/80">
                    {"Feel free to contact me directly through this form"}
                </p>
            </Fade>

            <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce={true}>
                <form className="mt-10 flex flex-col dark:text-black">
                    <input
                        className="h-14 px-4 rounded-lg dark:bg-white/[0.07] dark:text-white"
                        type="email"
                        name="senderEmail"
                        required
                        maxLength={50}
                        placeholder="Your Email"
                    />
                    <textarea
                        className="h-28 px-4 py-2 rounded-lg dark:bg-white/[0.07] mt-4 dark:text-white"
                        name="message"
                        required
                        maxLength={5000}
                        placeholder="Please type here"
                    ></textarea>
                    <SubmitBtn text={"Submit"} className="mt-4" />
                </form>

            </Fade>
        </motion.section>
    )
}