"use client";

import React from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { Link } from "@/lib/types";
import { useActiveSectionContext } from "@/containers/active-section";
import { links } from "@/lib/data";

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    return (
        <header className="hidden md:flex items-center justify-center fixed z-[999] w-full mt-4">
            <div>
                <ul>
                    {links.map((link) => (
                        <li>
                            <NextLink
                            href={link.hash}>
                                {link.nameEng}
                            </NextLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}