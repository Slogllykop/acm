"use client";

import React, { useEffect, useRef, useState } from "react";
import { Language } from "@mui/icons-material";
import type { InfiniteCarouselProps, Speed } from "./InfiniteCarousel.d";

const TAGS: string[] = [
    "Department of Computer",
    "ACM Student Chapter",
    "Modern College of Engineering",
];

const SPEEDS: { [key in Speed]: string } = {
    fast: "20s",
    normal: "40s",
    slow: "80s",
};

const ListItem: React.FC<{ text: string }> = ({ text }): React.ReactElement => (
    <li className="relative flex flex-shrink-0 select-none">
        <h3>{text}</h3>
        <Language className="mx-4" />
    </li>
);

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
    direction = "left",
    speed = "normal",
}): React.ReactElement => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (!containerRef.current || !scrollerRef.current) return;

        const cloneItems = () =>
            Array.from(scrollerRef.current!.children).forEach((item) => {
                scrollerRef.current!.appendChild(item.cloneNode(true));
            });

        cloneItems();
        cloneItems();
        getDirection();
        getSpeed();
        setStart(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getDirection = () =>
        containerRef.current?.style.setProperty(
            "--animation-direction",
            direction === "left" ? "forwards" : "reverse",
        );

    const getSpeed = () => {
        containerRef.current?.style.setProperty(
            "--animation-duration",
            SPEEDS[speed],
        );
    };

    return (
        <div
            ref={containerRef}
            className="scroller relative z-20 overflow-hidden border-y border-neutral-50 bg-black text-neutral-50"
        >
            <ul
                ref={scrollerRef}
                className={`${start ? "animate-scroll" : ""} flex w-max min-w-full shrink-0 flex-nowrap py-4`}
            >
                {TAGS.map((text) => (
                    <ListItem key={text} text={text} />
                ))}
            </ul>
        </div>
    );
};

export default InfiniteCarousel;
