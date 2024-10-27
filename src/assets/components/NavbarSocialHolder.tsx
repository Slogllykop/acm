import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { navLinkVariant, navLinkHolderVariant } from "@variants";
import { SOCIALS } from "@data/socialLinks";

const NavbarLinkHolder: React.FC = (): React.ReactElement => {
    return (
        <motion.div
            className="pointer-events-none hidden border-0 border-red-500 md:pointer-events-auto md:flex md:items-center md:justify-between md:gap-3"
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
                            className={`flex gap-1 text-sm text-white`}
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
