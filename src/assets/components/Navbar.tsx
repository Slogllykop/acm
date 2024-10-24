"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@images";
import { navVariant, navLogoVariant, logoSubtextVariant } from "@variants";
import NavbarLinkHolder from "./NavbarLinkHolder";
import NavbarSocialHolder from "./NavbarSocialHolder";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const [isAnimated, setIsAnimated] = useState<boolean>(false);
    const [navbarState, stNavbarState] = useState<
        "loading" | "loaded" | "expanded"
    >("loaded");
    const pathname: string = usePathname();

    return (
        <motion.nav
            initial="loading"
            animate={navbarState}
            variants={navVariant}
            transition={{ duration: 2, ease: [0.1, 0.9, 0.2, 1] }}
            onAnimationComplete={() => setIsAnimated(true)}
            className={`${isAnimated ? "px-4 noise" : "bg-white"} fixed z-[999999] flex items-center justify-between before:rounded-[40px]`}
        >
            <motion.div
                variants={navLogoVariant}
                className={`${isAnimated ? "pointer-events-auto" : "pointer-events-none"} absolute`}
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
                        variants={logoSubtextVariant}
                        className="-translate-y-[0.625rem] translate-x-[37%] text-xs font-semibold text-zinc-500"
                    >
                        a ACM Student chapter
                    </motion.div>
                )}
            </motion.div>
            {isAnimated && (
                <>
                    <button
                        className="fixed inset-[auto_10rem] z-50 w-12 bg-black text-red-500"
                        onClick={() =>
                            stNavbarState((prev) =>
                                prev === "expanded" ? "loaded" : "expanded",
                            )
                        }
                    >
                        TEMP
                    </button>
                    <span className="user-select-none pointer-events-none w-16"></span>
                    <NavbarLinkHolder pathname={pathname} />
                    <NavbarSocialHolder pathname={pathname} />
                </>
            )}
        </motion.nav>
    );
};

export default Navbar;
