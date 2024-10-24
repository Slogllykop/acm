// NAVBAR VARIANTS ARE DEFINED HERE

const EASE_KEYFRAMES = [0.1, 0.9, 0.2, 1];

type navVariant = {
    loading: {
        inset: string | number;
        borderRadius: string | number;
        width: string | number;
        height: string | number;
    };
    loaded: {
        inset: string | number;
        borderRadius: string | number;
        width: string | number;
        height: string | number;
    };
    expanded: {
        inset: string | number;
        borderRadius: string | number;
        width: string | number;
        height: string | number;
    };
};

export const navVariant: Readonly<navVariant> = {
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
    },
};

// ====================================================================================
// ====================================================================================

type navLogoVariant = {
    loading: {
        top: string | number;
        left: string | number;
    };
    loaded: {
        top: string | number;
        left: string | number;
        transition: {
            duration: number;
            delay: number;
            x: { type: string };
            ease: number[] | number;
        };
    };
};

export const navLogoVariant: Readonly<navLogoVariant> = {
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

export const navLinkVariant: Readonly<navLinkVariant> = {
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

export const navLinkHolderVariant: Readonly<navLinkHolderVariant> = {
    loading: {
        transition: { staggerChildren: 0.2, delayChildren: 0.75 },
    },
    loaded: {
        transition: { staggerChildren: 0.2, staggerDirection: 1 },
    },
};

// ====================================================================================
// ====================================================================================

type logoSubtextVariant = {
    loading: {
        opacity: number;
    };
    loaded: {
        opacity: number;
        transition: {
            duration: number;
            ease: number[] | number;
        };
    };
};

export const logoSubtextVariant: Readonly<logoSubtextVariant> = {
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
