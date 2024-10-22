// ALL FRAMER MOTION VARIANTS ARE DEFINED HERE

type navVariant = {
    loading: {
        inset: string | number;
        borderRadius: string | number;
    };
    loaded: {
        inset: string | number;
        borderRadius: string | number;
    };
};

export const navVariant = {
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
};

// ====================================================================================
// ====================================================================================

type navLogoVariant = {
    loading: {
        translateX: string | number;
        translateY: string | number;
    };
    loaded: {
        translateX: string | number;
        translateY: string | number;
        transition: {
            delay: number;
            x: { type: string; stiffness: number; damping: number };
            ease: number[] | number;
        };
    };
};

export const navLogoVariant: navLogoVariant = {
    loading: {
        translateX: "20vw",
        translateY: "45vh",
    },
    loaded: {
        translateX: 0,
        translateY: 0,
        transition: {
            delay: 0,
            x: { type: "spring", stiffness: 0, damping: 20 },
            ease: [0.1, 0.5, 0.2, 1],
        },
    },
};

// ====================================================================================
// ====================================================================================

type navLinkVariant = {
    loading: {
        translateX: number;
        opacity: number;
    };
    loaded: {
        translateX: number;
        opacity: number;
        transition: { duration: number };
    };
};

export const navLinkVariant: navLinkVariant = {
    loading: {
        translateX: 50,
        opacity: 0,
    },
    loaded: {
        translateX: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

// ====================================================================================
// ====================================================================================

type navLinkHolderVariant = {
    loading: {
        transition: { staggerChildren: number; delayChildren: number };
    };
    loaded: {
        transition: { staggerChildren: number; staggerDirection: number };
    };
};

export const navLinkHolderVariant: navLinkHolderVariant = {
    loading: {
        transition: { staggerChildren: 0.2, delayChildren: 0.75 },
    },
    loaded: {
        transition: { staggerChildren: 0.2, staggerDirection: 1 },
    },
};
