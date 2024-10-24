// HERO SECTION VARIANTS ARE DEFINED HERE

const EASE_KEYFRAMES = [0.1, 0.9, 0.2, 1];

type moveUp = {
    loading: {
        opacity: number;
        translateY: number | string;
    };
    loaded: {
        opacity: number;
        translateY: number | string;
        transition: {
            duration: number;
            ease: number[] | number;
        };
    };
};

export const heroTitle: Readonly<moveUp> = {
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

export const heroSubtext: Readonly<moveUp> = {
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
