"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

interface DirectionalButtonProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonVariants> { }

export function DirectionalButton({
    className,
    variant,
    size,
    children,
    ...props
}: DirectionalButtonProps) {
    const [hoverDirection, setHoverDirection] = React.useState<
        "top" | "bottom" | "left" | "right" | null
    >(null);
    const [isHovered, setIsHovered] = React.useState(false);

    const getDirection = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        return ["top", "right", "bottom", "left"][
            Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4
        ] as "top" | "right" | "bottom" | "left";
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        setHoverDirection(getDirection(e));
        setIsHovered(true);
        props.onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        setHoverDirection(getDirection(e));
        setIsHovered(false);
        props.onMouseLeave?.(e);
    };

    // Variants for entry/exit
    const variants = {
        initial: (direction: string) => {
            switch (direction) {
                case "top":
                    return { y: "-100%" };
                case "bottom":
                    return { y: "100%" };
                case "left":
                    return { x: "-100%" };
                case "right":
                    return { x: "100%" };
                default:
                    return { y: 0 };
            }
        },
        animate: { x: 0, y: 0 },
        exit: (direction: string) => {
            switch (direction) {
                case "top":
                    return { y: "-100%" };
                case "bottom":
                    return { y: "100%" };
                case "left":
                    return { x: "-100%" };
                case "right":
                    return { x: "100%" };
                default:
                    return { y: 0 };
            }
        },
    };

    return (
        <div
            className={cn(
                buttonVariants({ variant, size, className }),
                "relative overflow-hidden !bg-transparent !text-foreground border border-input cursor-pointer group"
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {/* Base Background (Transparent or custom) - Set by parent or defaults */}

            {/* Hover Fill */}
            <AnimatePresence mode="wait">
                {isHovered && (
                    <motion.span
                        key="hover-fill"
                        className="absolute inset-0 bg-primary z-0"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        custom={hoverDirection}
                        variants={variants}
                        transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                    />
                )}
            </AnimatePresence>

            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground">
                {children}
            </span>
        </div>
    );
}
