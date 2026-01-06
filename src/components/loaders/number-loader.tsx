"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface NumberLoaderProps {
    onComplete: () => void;
}

export default function NumberLoader({ onComplete }: NumberLoaderProps) {
    const [count, setCount] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const duration = 2000; // 2 seconds total duration
        const steps = 100;
        const intervalTime = duration / steps;

        let current = 0;

        const timer = setInterval(() => {
            current += 1;
            setCount(current);

            if (current === 100) {
                clearInterval(timer);
                setTimeout(() => {
                    setIsFinished(true);
                    setTimeout(onComplete, 1000); // Wait for exit animation
                }, 200);
            }
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!isFinished && (
                <motion.div
                    key="loader-overlay"
                    className="fixed inset-0 z-[9999] flex items-end justify-end bg-[#020817] px-10 py-10"
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: {
                            duration: 0.8,
                            ease: [0.76, 0, 0.24, 1],
                            delay: 0.2
                        }
                    }}
                >

                    <motion.div
                        className="text-9xl font-bold text-[#fff] tracking-tighter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{
                            x: -100,
                            opacity: 0,
                            transition: { duration: 0.5 }
                        }}
                    >
                        {count}%
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
