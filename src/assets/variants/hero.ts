// HERO SECTION VARIANTS ARE DEFINED HERE

import type { Variants } from "framer-motion";

const EASE_KEYFRAMES = [0.1, 0.9, 0.2, 1];

export const heroTitle: Readonly<Variants> = {
    loading: {
        translateY: "50px",
        opacity: 0,
    },
    loaded: {
        translateY: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: EASE_KEYFRAMES,
        },
    },
};

// ====================================================================================
// ====================================================================================

export const heroSubtext: Readonly<Variants> = {
    loading: {
        translateY: "50px",
        opacity: 0,
    },
    loaded: {
        translateY: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: EASE_KEYFRAMES,
        },
    },
};
