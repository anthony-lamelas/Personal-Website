import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger helper — delay in seconds (e.g. index * 0.08) */
  delay?: number;
  /** Initial vertical offset in px */
  y?: number;
  /** Animate every time it enters the viewport, or just once */
  once?: boolean;
}

/**
 * Scroll-reveal wrapper. Fades + slides content in when it enters the viewport.
 * Fully disabled for users who prefer reduced motion.
 */
const Reveal = ({ children, className, delay = 0, y = 24, once = true }: RevealProps) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
