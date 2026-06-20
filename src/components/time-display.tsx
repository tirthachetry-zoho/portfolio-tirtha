"use client";

import { useState, useEffect } from "react";
import { Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function TimeDisplay() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-lg"
    >
      <MapPin className="w-3.5 h-3.5 text-primary" />
      <span className="text-xs text-muted-foreground">BLR</span>
      <div className="w-px h-3 bg-primary/20" />
      <Clock className="w-3.5 h-3.5 text-primary" />
      <span className="text-xs font-mono font-medium text-primary">{time}</span>
    </motion.div>
  );
}
