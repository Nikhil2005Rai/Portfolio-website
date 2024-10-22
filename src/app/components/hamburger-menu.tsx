"use client";

import React from "react";
import { Link } from "@/lib/types";
import clsx from "clsx";
import NextLink from "next/link";
import Hamburger from "hamburger-react";
import { useActiveSectionContext } from "@/containers/active-section";


//Animation
import { AnimatePresence ,motion } from "framer-motion";

type HamburgerMenuProps = { links: Link[] };

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
    return (
        <div className="md:hidden top-5 right-5 fixed w-[60] z-[999] flex flex-col items-end gap-2">
            <motion.button
            className = "bg-white w-[3rem] h-[3rem] drop-shadow backdrop-blur-[0.5rem] border border-slate-400 dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-green-950"
            >
                <Hamburger />
            </motion.button>

            <AnimatePresence>
                <div
                className = "w-full bg-white drop-shadow border border-slate-400 dark:border-white border-opacity-60 shadow-2xl rounded-2xl flex flex-col items-center justify-center dark:bg-gray-950 p-1"
                >
                    {links.map((link, index) => (
                        <div>
                            <NextLink
                            href={link.hash}>
                                {link.nameEng}
                            </NextLink>
                        </div>
                    ))}
                </div>
            </AnimatePresence>

        </div>
    )
}

export default HamburgerMenu;