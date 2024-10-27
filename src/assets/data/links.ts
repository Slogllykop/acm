import {
    HomeRounded,
    EmailRounded,
    DataUsageRounded,
} from "@mui/icons-material";
import React from "react";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

export type LINK_TYPE = {
    name: string;
    icon: React.FunctionComponentElement<
        DefaultComponentProps<SvgIconTypeMap<object, "svg">>
    >;
    href: string;
};

export const LINKS: LINK_TYPE[] = [
    {
        name: "Home",
        icon: React.createElement(HomeRounded, { className: "!text-lg" }),
        href: "/",
    },
    {
        name: "Contact",
        icon: React.createElement(EmailRounded, { className: "!text-lg" }),
        href: "/contact",
    },
    {
        name: "About",
        icon: React.createElement(DataUsageRounded, { className: "!text-lg" }),
        href: "/about",
    },
];

export const LINKS_MOBILE: LINK_TYPE[] = [
    {
        name: "Home",
        icon: React.createElement(HomeRounded, { className: "!text-2xl" }),
        href: "/",
    },
    {
        name: "Contact",
        icon: React.createElement(EmailRounded, { className: "!text-2xl" }),
        href: "/contact",
    },
    {
        name: "About",
        icon: React.createElement(DataUsageRounded, { className: "!text-2xl" }),
        href: "/about",
    },
];
