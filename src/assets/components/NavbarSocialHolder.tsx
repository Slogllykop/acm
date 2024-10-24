import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { navLinkVariant, navLinkHolderVariant } from "@variants";
import { SOCIALS } from "@data/socialLinks";

type NavbarLinkHolderProps = {
    pathname: string;
};

const NavbarLinkHolder: React.FC<NavbarLinkHolderProps> = ({
    pathname,
}): React.ReactElement => {
    return (
        <motion.div
            className="hidden items-center justify-between gap-3 border-0 border-red-500 md:flex"
            variants={navLinkHolderVariant}
        >
            {SOCIALS.map((link) => {
                return (
                    <motion.div
                        variants={navLinkVariant}
                        key={link.id}
                        aria-label={link.name}
                        title={link.name}
                    >
                        <Link
                            href={link.href}
                            target="_blank"
                            className={`flex gap-1 text-sm ${pathname === link.href ? "text-sky-400" : "text-white"}`}
                        >
                            {link.icon}
                        </Link>
                    </motion.div>
                );
            })}
        </motion.div>
    );
};

export default NavbarLinkHolder;
