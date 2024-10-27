"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useStatus, type initialStatusType } from "@/assets/context";
import { motion } from "framer-motion";
import { navbarBarsVariant } from "@variants";
import { NavbarMobileLinkHolder, NavbarMobileSocialsHolder } from "@components";

type NavbarMobileProps = {
    pathname: string;
};

const NavbarMobile: React.FC<NavbarMobileProps> = ({
    pathname,
}): React.ReactElement => {
    const { navbarState, setNavbarState }: initialStatusType = useStatus();

    return (
        <motion.div
            initial="loading"
            animate="loaded"
            className="mt-6 flex w-full flex-col self-start md:hidden"
        >
            <motion.i variants={navbarBarsVariant} className={`self-end pr-1`}>
                <FontAwesomeIcon
                    icon={faBars}
                    className={`text-right text-xl transition ${navbarState === "expanded" ? "scale-125 text-sky-400" : "scale-100 text-white"}`}
                    onClick={() => {
                        setNavbarState((prev) =>
                            prev === "expanded" ? "loaded" : "expanded",
                        );
                    }}
                />
            </motion.i>
            <NavbarMobileLinkHolder pathname={pathname} />
            <NavbarMobileSocialsHolder />
        </motion.div>
    );
};

export default NavbarMobile;
