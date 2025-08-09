"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const seats = "/assets/img/backgroundImages/seats.jpeg";

export default function Seat() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  // Reduced parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    [0.7, 1, 1, 0.7],
  );
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -15]);

  return (
    <motion.div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden -mt-20 z-30"
      style={{ opacity }}
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${seats})`,
          y: bgY,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 z-10"></div>

      {/* Centered Content */}
      <div className="relative z-50 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div style={{ y: titleY }} className="max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-6xl font-light tracking-wide text-white"
          >
            <span className="font-extralight">We've saved a </span>
            <span className="text-amber-200 italic font-extralight">seat</span>
            <span className="font-extralight"> for you!</span>
          </motion.h1>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="w-16 h-px bg-amber-300/50 my-6"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 0.7 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        />

        {/* Description */}
        <motion.div style={{ y: textY }} className="max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-m md:text-base leading-relaxed text-white/80 font-bold"
          >
            Discover more about God
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}