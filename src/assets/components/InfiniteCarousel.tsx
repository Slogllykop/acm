"use client";

import React, { useEffect, useState } from "react";
import { Language } from "@mui/icons-material";

const TAGS: string[] = [
    "Department of Computer",
    "ACM Student Chapter",
    "Modern College of Engineering",
];

const ListItem: React.FC<{ text: string }> = ({ text }): React.ReactElement => (
    <li key={text} className="relative flex flex-shrink-0 select-none">
        <h3>{text}</h3>
        <Language className="mx-4" />
    </li>
);

type InfiniteCarouselProps = {
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
};

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
    direction = "left",
    speed = "slow",
}): React.ReactElement => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!containerRef.current || !scrollerRef.current) return;

        Array.from(scrollerRef.current.children).forEach((item) =>
            scrollerRef.current?.appendChild(item.cloneNode(true)),
        );

        getDirection();
        getSpeed();
        setStart(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [start, setStart] = useState(false);

    const getDirection = () => {
        if (!containerRef.current) return;

        if (direction === "left") {
            containerRef.current.style.setProperty(
                "--animation-direction",
                "forwards",
            );
        } else {
            containerRef.current.style.setProperty(
                "--animation-direction",
                "reverse",
            );
        }
    };

    const getSpeed = () => {
        if (!containerRef.current) return;

        if (speed === "fast") {
            containerRef.current.style.setProperty(
                "--animation-duration",
                "20s",
            );
        } else if (speed === "normal") {
            containerRef.current.style.setProperty(
                "--animation-duration",
                "40s",
            );
        } else {
            containerRef.current.style.setProperty(
                "--animation-duration",
                "80s",
            );
        }
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
                {TAGS.map((text) => (
                    <ListItem key={text} text={text} />
                ))}
            </ul>
        </div>
    );
};

export default InfiniteCarousel;
