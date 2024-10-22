import { useState, useEffect } from "react";

interface Dimensions {
    width: number;
    height: number;
}

/**
 * Custom hook that provides the current dimensions of the window.
 *
 * @returns {Dimensions} An object containing the width and height of the window.
 *
 * @example
 * const { width, height } = useDim();
 * console.log(`Width: ${width}, Height: ${height}`);
 *
 * @remarks
 * This hook sets up an event listener for the window resize event and updates
 * the dimensions accordingly. It cleans up the event listener when the component
 * using this hook is unmounted.
 */
const useDim = (): Dimensions => {
    const getWindowSize = (): Dimensions => ({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [windowSize, setWindowSize] = useState<Dimensions>(getWindowSize());

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(getWindowSize());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
};

export default useDim;
