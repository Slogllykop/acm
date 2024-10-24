"use client";
import React from "react";
import { Spotlight } from "@components";
import { motion } from "framer-motion";
import { heroTitle, heroSubtext } from "@variants";
import { useStatus, type initialStatusType } from "@/assets/context";

const Hero: React.FC = (): React.ReactElement => {
    const { hasFinishedLoading }: initialStatusType = useStatus();
    return (
        <div className="bg-grid-white relative flex h-[100dvh] w-full animate-moveX items-center justify-center overflow-hidden bg-black/[0.96] antialiased">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-40%"></div>
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />
            <motion.div
                initial="loading"
                animate="loaded"
                transition={{
                    staggerChildren: 0.5,
                    delayChildren: hasFinishedLoading ? 0 : 2.25,
                }}
                className="relative z-10 mx-auto w-full max-w-7xl p-4"
            >
                <motion.h1
                    variants={heroTitle}
                    className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-4 text-center text-4xl font-bold text-transparent md:text-7xl"
                >
                    Association for <br />
                    Computing Machinery
                </motion.h1>
                <motion.p
                    variants={heroSubtext}
                    className="md:w-unset mx-auto mt-4 w-[80%] max-w-2xl text-center text-base font-normal text-neutral-300"
                >
                    ACM Student chapter of PES&apos;s Modern College of
                    Engineering, established in 2018 is an active student
                    organization which organizes a number of technical
                    activities including workshops, competitions, various
                    seminars, webinars, guest lectures, student development
                    programs, technical events etc. for its members and
                    students.
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Hero;
