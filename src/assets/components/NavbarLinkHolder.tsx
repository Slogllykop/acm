import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { navLinkVariant, navLinkHolderVariant } from "@variants";
import { LINKS } from "@data/links";

type NavbarLinkHolderProps = {
    pathname: string;
};

const NavbarLinkHolder: React.FC<NavbarLinkHolderProps> = ({
    pathname,
}): React.ReactElement => {
    return (
        <motion.div
            className="pointer-events-none hidden border-0 border-red-500 md:pointer-events-auto md:flex md:items-center md:justify-between md:gap-6"
            variants={navLinkHolderVariant}
        >
            {LINKS.map((link) => {
                return (
                    <motion.div variants={navLinkVariant} key={link.name}>
                        <Link
                            href={link.href}
                            className={`flex gap-1 text-sm ${pathname === link.href ? "text-sky-400" : "text-white"}`}
                        >
                            {link.icon}
                            {link.name}
                        </Link>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default NavbarLinkHolder;
