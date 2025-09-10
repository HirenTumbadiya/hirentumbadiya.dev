'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './TerminalLoader.module.css';

const lines = [
  'Initializing portfolio...',
  'Loading assets...',
  'Connecting to GitHub...',
  'Fetching latest projects...',
  'Injecting personality...',
  'Launching interface...',
];

type TerminalLoaderProps = {
  onComplete?: () => void;
};

const TerminalLoader = ({ onComplete }: TerminalLoaderProps) => {
  const outputRef = useRef(null);
  const terminalRef = useRef(null);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const type = () => {
      if (lineIndex >= lines.length) {
        crashEffect();
        return;
      }

      const currentLine = lines[lineIndex];
      const char = currentLine[charIndex];

      if (char) {
        const span = Math.random() < 0.05 && char.trim() !== ''
          ? `<span class=\"${styles.glitch}\">${char}</span>`
          : char;

        // @ts-expect-error: ref to pre element
        outputRef.current.innerHTML += span as unknown as string;
        setCharIndex((i) => i + 1);
      } else {
        // @ts-expect-error: ref to pre element
        outputRef.current.innerHTML += '\n';
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }
    };

    intervalRef.current = window.setInterval(type, 35);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [lineIndex, charIndex]);

  const crashEffect = () => {
    if (terminalRef.current) {
      // @ts-expect-error: DOM classList
      terminalRef.current.classList.add(styles.breaking);
      // @ts-expect-error: ref to pre element
      outputRef.current.innerHTML += `\n\n> SYSTEM FAILURE DETECTED\n> Rebooting...`;
    }

    // Fade out and notify completion
    window.setTimeout(() => {
      // @ts-expect-error: DOM classList
      terminalRef.current?.classList.add(styles.fadeOut);
    }, 1200);

    window.setTimeout(() => {
      onComplete?.();
    }, 2000);
  };

  return (
    <div className={styles.terminal} ref={terminalRef}>
      <pre className={styles.output} ref={outputRef}></pre>
    </div>
  );
};

export default TerminalLoader;

 