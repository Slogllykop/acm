"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    navbarMobileLinksVariant,
    navbarMobileLinkVariant,
    navbarMobileHeaderVariant,
} from "@variants";
import { LINKS_MOBILE } from "@data/links";
import { useStatus, type initialStatusType } from "@/assets/context";

type NavbarMobileLinkHolderProps = {
    pathname: string;
};

const NavbarMobileLinkHolder: React.FC<NavbarMobileLinkHolderProps> = ({
    pathname,
}): React.ReactElement => {
    const { setNavbarState, navbarState }: initialStatusType = useStatus();
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
                navigate
            </motion.h3>
            <motion.div
                className="space-y-6"
                variants={navbarMobileLinksVariant}
            >
                {LINKS_MOBILE.map((link) => {
                    return (
                        <motion.div
                            key={link.name}
                            variants={navbarMobileLinkVariant}
                        >
                            <Link
                                href={link.href}
                                onClick={() => setNavbarState("loaded")}
                                className={`flex justify-end gap-3 text-lg ${pathname === link.href ? "text-sky-400" : "text-white"}`}
                            >
                                {link.name}
                                {link.icon}
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};

export default NavbarMobileLinkHolder;
