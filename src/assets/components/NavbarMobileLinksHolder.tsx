"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    navbarMobileMoveYHolderVariant,
    navbarMobileLinkMoveYVariant,
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
            <motion.div
                className="space-y-6"
                variants={navbarMobileMoveYHolderVariant}
            >
                {LINKS_MOBILE.map((link) => {
                    return (
                        <motion.div
                            key={link.name}
                            variants={navbarMobileLinkMoveYVariant}
                        >
                            <Link
                                href={link.href}
                                onClick={() => setNavbarState("loaded")}
                                className={`flex items-center justify-end gap-3 text-2xl font-bold tracking-wide ${pathname === link.href ? "text-sky-400" : "text-white"}`}
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
