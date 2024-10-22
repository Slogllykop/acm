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
            className="flex items-center justify-between gap-6 border-0 border-red-500"
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
