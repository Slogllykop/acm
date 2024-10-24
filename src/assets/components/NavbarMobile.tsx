"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useStatus, type initialStatusType } from "@/assets/context";

type NavbarMobileProps = {
    pathname: string;
};

const NavbarMobile: React.FC<NavbarMobileProps> = (): React.ReactElement => {
    const { navbarState, setNavbarState }: initialStatusType = useStatus();

    return (
        <div className="mt-6 flex w-full flex-col self-start md:hidden">
            <FontAwesomeIcon
                icon={faBars}
                className={`self-end text-right text-xl ${navbarState === "expanded" ? "text-sky-400" : "text-white"}`}
                onClick={() => {
                    setNavbarState((prev) =>
                        prev === "expanded" ? "loaded" : "expanded",
                    );
                }}
            />
            {navbarState === "expanded" && (
                <h6 className="mt-10 text-center text-red-400">WIP...</h6>
            )}
        </div>
    );
};

export default NavbarMobile;
