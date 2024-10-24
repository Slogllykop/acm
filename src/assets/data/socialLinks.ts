import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedin,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export const SOCIALS = [
    {
        id: 1,
        name: "Instagram",
        href: "https://www.instagram.com/pesmcoe_acm",
        icon: React.createElement(FontAwesomeIcon, {
            icon: faInstagram,
            size: "lg",
        }),
    },
    {
        id: 2,
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/pesmcoe-acm-student-chapter",
        icon: React.createElement(FontAwesomeIcon, {
            icon: faLinkedin,
            size: "lg",
        }),
    },
    {
        id: 3,
        name: "Facebook",
        href: "https://www.facebook.com/pesmcoeacm",
        icon: React.createElement(FontAwesomeIcon, {
            icon: faFacebook,
            size: "lg",
        }),
    },
];
