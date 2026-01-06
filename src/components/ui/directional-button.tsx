"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

interface DirectionalButtonProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export function DirectionalButton({
    className,
    variant,
    size,
    asChild = false,
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
        const direction = Math.round(Math.atan2(y, x) / (Math.PI / 2) + 5) % 4;
        // 0: top, 1: right, 2: bottom, 3: left (checked: atan2(y,x) -> 0 is right, PI/2 is bottom)
        // atan2(0,1) = 0 (Right). 
        // atan2(1,0) = PI/2 (Bottom).
        // atan2(0,-1) = PI (Left).
        // atan2(-1,0) = -PI/2 (Top).

        // Formula: angle in radians. 
        // right: 0, bottom: 1.57, left: 3.14, top: -1.57
        // divide by PI/2 => right: 0, bottom: 1, left: 2, top: -1
        // add 4? or just simplistic logic.

        // Let's rely on standard logic:
        // w = rect.width, h = rect.height
        // x = e.clientX - rect.left - w/2
        // y = e.clientY - rect.top - h/2
        // d = Math.round((Math.atan2(y, x) * (180/Math.PI) + 180) / 90 + 3) % 4

        // d=0: Top, d=1: Right, d=2: Bottom, d=3: Left
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
                case "top": return { y: "-100%" };
                case "bottom": return { y: "100%" };
                case "left": return { x: "-100%" };
                case "right": return { x: "100%" };
                default: return { y: 0 };
            }
        },
        animate: { x: 0, y: 0 },
        exit: (direction: string) => {
            switch (direction) {
                case "top": return { y: "-100%" };
                case "bottom": return { y: "100%" };
                case "left": return { x: "-100%" };
                case "right": return { x: "100%" };
                default: return { y: 0 };
            }
        }
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

            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground">{children}</span>
        </div>
    );
}
