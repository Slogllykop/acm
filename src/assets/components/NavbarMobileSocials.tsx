"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    navbarMobileLinksVariant,
    navbarMobileLinkVariant,
    navbarMobileHeaderVariant,
} from "@variants";
import { SOCIALS_MOBILE } from "@data/socialLinks";
import { useStatus, type initialStatusType } from "@/assets/context";

const NavbarMobileSocialsHolder: React.FC = (): React.ReactElement => {
    const { navbarState }: initialStatusType = useStatus();
    return (
        <motion.div
            initial="loaded"
            className={`${navbarState === "expanded" ? "pointer-events-auto select-auto" : "user-all pointer-events-none"}`}
            animate={navbarState === "expanded" ? "expanded" : "loaded"}
        >
            <motion.h3
                variants={navbarMobileHeaderVariant}
                className="my-4 rounded-md bg-white px-1 text-right text-lg font-semibold uppercase tracking-[0.2em] text-zinc-950"
            >
                socials
            </motion.h3>
            <motion.div
                className="flex justify-end gap-6"
                variants={navbarMobileLinksVariant}
            >
                {SOCIALS_MOBILE.map((link) => {
                    return (
                        <motion.div
                            key={link.id}
                            aria-label={link.name}
                            title={link.name}
                            variants={navbarMobileLinkVariant}
                        >
                            <Link
                                href={link.href}
                                target="_blank"
                                className={`flex gap-1 text-sm text-white`}
                            >
                                {link.icon}
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};

export default NavbarMobileSocialsHolder;
