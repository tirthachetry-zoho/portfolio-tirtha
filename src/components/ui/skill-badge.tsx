"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SkillBadgeProps = {
  name: string;
  /** Stagger index for entrance animation */
  index?: number;
};

/**
 * Animated, categorized skill badge.
 * Hover lifts the badge and brightens the accent border.
 */
export function SkillBadge({ name, index = 0 }: SkillBadgeProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <li className="chip transition-colors hover:border-primary hover:text-primary">
        {name}
      </li>
    );
  }

  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ y: -3 }}
      className={cn(
        "chip cursor-default transition-colors duration-200",
        "hover:border-primary hover:text-primary"
      )}
    >
      {name}
    </motion.li>
  );
}