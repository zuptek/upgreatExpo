"use client";

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, { duration: 2000 });
    const displayValue = useTransform(springValue, (latest) => Math.floor(latest) + suffix);

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
};

export default Counter;
