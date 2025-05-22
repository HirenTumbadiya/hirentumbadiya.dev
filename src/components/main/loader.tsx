import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

type LoaderProps = {
  finishLoading: () => void;
};

export const Loader = ({ finishLoading }: LoaderProps) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading();
    }, 2400);

    return () => clearTimeout(timer);
  }, [finishLoading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 1;
        }
        clearInterval(interval);
        return 100;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Variants for staggered animations
  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary h-px w-full"
            style={{ top: `${i * 10}%` }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + i * 0.5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Centered HT logo */}
      <motion.div
        className="flex items-center justify-center"
        initial="initial"
        animate="animate"
      >
        <div className="relative">
          <motion.div 
            className={`${playfair_display.className} text-8xl font-bold text-primary`}
          >
            <motion.span
              variants={letterVariants}
              className="inline-block"
            >
              H
            </motion.span>
            <motion.span
              variants={letterVariants}
              className="inline-block"
              transition={{ delay: 0.1 }}
            >
              T
            </motion.span>
          </motion.div>
          
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 1.2, 
              delay: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9]
            }}
          />
        </div>
      </motion.div>

      {/* Bottom right counter */}
      <motion.div 
        className="absolute bottom-8 right-8 text-4xl font-mono text-primary font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.span 
          className="inline-block"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          {counter.toString().padStart(3, '0')}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};