"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    navbarMobileLinkMoveYVariant,
    navbarMobileSocialsDividerVariant,
    navbarMobileMoveYHolderDelayedVariant,
} from "@variants";
import { SOCIALS_MOBILE } from "@data/socialLinks";
import { useStatus, type initialStatusType } from "@/assets/context";

const NavbarMobileSocialsHolder: React.FC = (): React.ReactElement => {
    const { navbarState }: initialStatusType = useStatus();
    return (
        <motion.div
            initial="loaded"
            className={`${navbarState === "expanded" ? "pointer-events-auto select-auto space-y-4" : "user-all pointer-events-none"}`}
            animate={navbarState === "expanded" ? "expanded" : "loaded"}
        >
            <motion.div
                variants={navbarMobileSocialsDividerVariant}
                className="mx-auto w-px bg-white"
            ></motion.div>
            <motion.div
                className="flex flex-col items-center gap-4"
                variants={navbarMobileMoveYHolderDelayedVariant}
            >
                {SOCIALS_MOBILE.map((link) => {
                    return (
                        <motion.div
                            key={link.id}
                            aria-label={link.name}
                            title={link.name}
                            variants={navbarMobileLinkMoveYVariant}
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
