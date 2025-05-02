"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import CountUp from "react-countup"
const seats = "/assets/img/backgroundImages/seats.jpeg"
import { useNavigate } from "react-router-dom"

export default function Seat() {
  const containerRef = useRef(null)
  const statsRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const statsInView = useInView(statsRef, { once: false, amount: 0.5 })
  const navigate = useNavigate()

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.7, 1, 1, 0.7])
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -30])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -15])

  // Stats data
  const stats = [{ label: "Service Times a Week", value: 5, suffix: "+" }]

  const handleJoinUsClick = () => {
    navigate("/contact-us")
  }

  return (
      <motion.div
          ref={containerRef}
          className="relative h-screen w-full overflow-hidden mt-16 md:mt-24"
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

        {/*<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 z-10"></div>*/}


        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center px-6 pt-16 md:pt-0">
          <motion.div style={{ y: titleY }} className="max-w-2xl mx-auto mt-16 md:mt-0">
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
              className="w-16 h-px bg-amber-300/50 my-8"
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
              At Lovereign Bible Church, we want to stand with you as you discover more about God's grace, grow in His
              knowledge, and serve His will.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 max-w-2xl mx-auto"
          >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-center mb-8"
            >
              <motion.div
                  initial={{ scale: 0.8 }}
                  animate={statsInView ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 1.2,
                  }}
                  className="mb-2"
              >
              <span className="text-6xl md:text-9xl font-bold text-white">
                {statsInView ? <CountUp start={2.5} end={5} duration={2.5} delay={0.5} /> : "5+"}
              </span>
              </motion.div>
              <motion.p
                  className="text-xs md:text-sm uppercase tracking-wider text-amber-300/80 font-light"
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.5 }}
              >
                Services
              </motion.p>
            </motion.div>

            {/* Enhanced service times breakdown */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.div
                  className="bg-black/30 backdrop-blur-sm border border-amber-300/10 rounded-lg p-5 transform transition-all duration-300 hover:border-amber-300/30 hover:bg-black/40"
                  whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-center mb-3"></div>
                <h3 className="text-amber-200 text-center font-medium mb-2">Sunday</h3>
                <div className="space-y-2 text-center text-white text-sm">
                  <p>8:00 AM - First Service</p>
                  <p>11:30 AM - Second Service</p>
                  <p>5:00 PM - Evening Feast</p>
                </div>
              </motion.div>

              <motion.div
                  className="bg-black/30 backdrop-blur-sm border border-amber-300/10 rounded-lg p-5 transform transition-all duration-300 hover:border-amber-300/30 hover:bg-black/40"
                  whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-center mb-3"></div>
                <h3 className="text-amber-200 text-center font-medium mb-2">Wednesday</h3>
                <div className="space-y-2 text-center text-white/80 text-sm">
                  <p>6:00 PM Each Night- Midweek Service</p>
                </div>
              </motion.div>

              <motion.div
                  className="bg-black/30 backdrop-blur-sm border border-amber-300/10 rounded-lg p-5 transform transition-all duration-300 hover:border-amber-300/30 hover:bg-black/40"
                  whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-center mb-3"></div>
                <h3 className="text-amber-200 text-center font-medium mb-2">Friday</h3>
                <div className="space-y-2 text-center text-white/80 text-sm">
                  <p>6:00 PM Each Night- Supernatural Encounter Night</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Call-to-action button */}
          <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.8 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(251, 191, 36, 0.1)",
                borderColor: "rgba(251, 191, 36, 0.5)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              onClick={handleJoinUsClick}
              className="mt-12 px-8 py-2.5 border border-amber-300/30 text-amber-100 rounded-full text-xs md:text-sm tracking-widest uppercase font-light hover:bg-amber-900/10 transition-all duration-300"
          >
            Join Us
          </motion.button>

          {/* Floating elements for visual interest */}
          {[...Array(5)].map((_, index) => (
              <motion.div
                  key={index}
                  className="absolute w-1 h-1 rounded-full bg-amber-300/30"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    opacity: 0,
                  }}
                  animate={{
                    y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight - 100],
                    opacity: [0, 0.4, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 10,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 2,
                    ease: "easeInOut",
                  }}
              />
          ))}
        </div>
      </motion.div>
  )
}
