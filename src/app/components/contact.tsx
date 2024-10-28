"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useInView";
import SubmitBtn from "./submit-btn";
import { Fade } from "react-awesome-reveal";
import toast from "react-hot-toast";


export default function Contact() {
    const { ref } = useSectionInView("#contact")
    const [senderEmail, setSenderEmail] = useState('');
    const [message, setMessage] = useState('');
    const [pending, setPending] = useState(false);



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPending(true);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: senderEmail, content: message }),
            });

            if (response.ok) {
                toast.success('Email sent successfully!');
                setSenderEmail('');
                setMessage('');
            } else {
                toast.error('Failed to send email.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('An error occurred.');
        }
        setPending(false);
    };

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
                <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
                    <input
                        className="h-14 px-4 rounded-lg dark:bg-white/[0.07] dark:text-white"
                        type="email"
                        name="senderEmail"
                        required
                        maxLength={50}
                        placeholder="Your Email"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                    />
                    <textarea
                        className="h-28 px-4 py-2 rounded-lg dark:bg-white/[0.07] mt-4 dark:text-white"
                        name="message"
                        required
                        maxLength={5000}
                        placeholder="Please type here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <SubmitBtn text={"Submit"} className="mt-4" pending={pending} />
                </form>

            </Fade>
        </motion.section>
    )
}