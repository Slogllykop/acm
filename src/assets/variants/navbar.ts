// NAVBAR VARIANTS ARE DEFINED HERE

import type { Variants } from "framer-motion";

const EASE_KEYFRAMES = [0.1, 0.9, 0.2, 1];

export const navVariant: Readonly<Variants> = {
    loading: {
        inset: 0,
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
    },
    loaded: {
        inset: "1rem 2rem auto",
        width: "calc(100vw - 4rem)",
        height: "72px",
        borderRadius: "40px",
    },
    expanded: {
        inset: "1rem 2rem",
        width: "calc(100vw - 4rem)",
        height: "400px",
        borderRadius: "40px",
        transition: { duration: 0.5, ease: EASE_KEYFRAMES },
    },
};

// ====================================================================================
// ====================================================================================

export const navLogoVariant: Readonly<Variants> = {
    loading: {
        top: "calc(50% - 20px)",
        left: "calc(50% - 90px)",
    },
    loaded: {
        top: "1rem",
        left: "1rem",
        transition: {
            duration: 1,
            delay: 0,
            x: { type: "spring" },
            ease: EASE_KEYFRAMES,
        },
    },
    expanded: {
        top: "1rem",
        left: "1rem",
    },
};

// ====================================================================================
// ====================================================================================

export const navLinkVariant: Readonly<Variants> = {
    loading: {
        translateX: 50,
        opacity: 0,
    },
    loaded: {
        translateX: 0,
        opacity: 1,
        transition: { duration: 0.5, when: "afterParent" },
    },
};

// ====================================================================================
// ====================================================================================

export const navLinkHolderVariant: Readonly<Variants> = {
    loading: {
        transition: { staggerChildren: 0.2, delayChildren: 0.75 },
    },
    loaded: {
        transition: { staggerChildren: 0.2, staggerDirection: 1 },
    },
};

// ====================================================================================
// ====================================================================================

export const logoSubtextVariant: Readonly<Variants> = {
    loading: {
        opacity: 1,
    },
    loaded: {
        opacity: 0,
        transition: {
            duration: 2,
            ease: EASE_KEYFRAMES,
        },
    },
};
