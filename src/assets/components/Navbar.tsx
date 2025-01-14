"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@images";
import { navVariant, navLogoVariant, logoSubtextVariant } from "@variants";
import {
    NavbarLinkHolder,
    NavbarSocialHolder,
    NavbarMobile,
} from "@components";
import { usePathname } from "next/navigation";
import { useStatus, type initialStatusType } from "@/assets/context";

const Navbar: React.FC = (): React.ReactElement => {
    const pathname: string = usePathname();
    const {
        hasFinishedLoading,
        setHasFinishedLoading,
        navbarState,
    }: initialStatusType = useStatus();

    return (
        <motion.nav
            initial="loading"
            animate={navbarState}
            variants={navVariant}
            transition={{ duration: 2, ease: [0.1, 0.9, 0.2, 1] }}
            onAnimationComplete={() => {
                setHasFinishedLoading(true);
            }}
            className={`${hasFinishedLoading ? "px-4 noise" : "bg-white"} fixed z-[9999999] flex items-center justify-between before:rounded-[40px]`}
        >
            <motion.div
                variants={navLogoVariant}
                className={`${hasFinishedLoading ? "pointer-events-auto" : "pointer-events-none"} absolute`}
            >
                <Link href="/" className="">
                    <Image
                        src={Logo}
                        priority
                        alt="Logo"
                        height={35}
                        className={`aspect-[147/40] h-[35px] w-auto ${!hasFinishedLoading ? "animate-pulse invert" : ""}`}
                    />
                </Link>
                {!hasFinishedLoading && (
                    <motion.div
                        variants={logoSubtextVariant}
                        className="-translate-y-[0.625rem] translate-x-[37%] text-xs font-semibold text-zinc-500"
                    >
                        a ACM Student chapter
                    </motion.div>
                )}
            </motion.div>
            {hasFinishedLoading && (
                <>
                    <span className="pointer-events-none hidden w-16 select-none md:block"></span>
                    <NavbarLinkHolder pathname={pathname} />
                    <NavbarSocialHolder />
                    <NavbarMobile pathname={pathname} />
                </>
            )}
        </motion.nav>
    );
};

export default Navbar;
