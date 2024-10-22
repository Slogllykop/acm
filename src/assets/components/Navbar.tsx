"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@images";
import { navVariant, navLogoVariant } from "@variants";
// import NavbarLinkHolder from "./NavbarLinkHolder";
// import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const [isAnimated, setIsAnimated] = useState<boolean>(false);
    // const pathname: string = usePathname();

    return (
        <motion.nav
            initial="loading"
            animate="loaded"
            variants={navVariant}
            transition={{ duration: 2, ease: [0.1, 0.9, 0.2, 1] }}
            onAnimationComplete={() => setIsAnimated(true)}
            className={`${isAnimated ? "items-center justify-between noise" : "bg-white"} fixed z-50 before:rounded-full`}
        >
            <motion.div
                variants={navLogoVariant}
                className={`${isAnimated ? "pointer-events-auto" : "pointer-events-none"}`}
            >
                <Link href="/" className="">
                    <Image
                        src={Logo}
                        priority
                        alt="Logo"
                        // width={50}
                        height={35}
                        className={`aspect-[147/40] h-[35px] w-auto ${!isAnimated ? "animate-pulse invert" : ""}`}
                    />
                </Link>
                {!isAnimated && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        className="-translate-y-[0.625rem] translate-x-[37%] text-xs font-semibold text-zinc-500"
                    >
                        a ACM Student chapter
                    </motion.div>
                )}
            </motion.div>
            {/* {isAnimated && <NavbarLinkHolder pathname={pathname} />} */}
        </motion.nav>
    );
};

export default Navbar;
