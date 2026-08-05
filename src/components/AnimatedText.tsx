import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

/**
 * Renders `text` split into individual characters. Each character's
 * opacity is driven by scroll progress through the containing
 * paragraph, so the text appears to "write itself in" as the
 * section scrolls through view.
 */
export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");

  return (
    <p ref={ref} className={className}>
      {characters.map((char, i) => (
        <Char
          key={i}
          char={char}
          index={i}
          total={characters.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}

function Char({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      {/* invisible placeholder preserves layout/width */}
      <span style={{ visibility: "hidden" }}>{char === " " ? "\u00A0" : char}</span>
      <motion.span style={{ position: "absolute", left: 0, top: 0, opacity }}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}
