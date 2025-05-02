"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import useWindowSize from "../../hooks/useWindowSize"

// Define images outside component to prevent recreating on each render
const mobileImage1 = "/assets/img/backgroundImages/welcomehomemobilebg2.jpg"
const mobileImage2 = "/assets/img/backgroundImages/welcomehomeMobilebg1.jpg"
const desktopImage1 = "/assets/img/backgroundImages/homedesktopbg1.jpg"
const desktopImage2 = "/assets/img/backgroundImages/homedesktopbg2.png"

// Constants
const PHRASES = [
  "The best place to be is Lovereign Bible Church",
  "We believe and live by the word of God.",
  "Making a people ready for God",
]

const TITLES = ["Welcome Home", "Lovereign Bible Church"]
const IMAGE_TRANSITION_INTERVAL = 6000
const TITLE_TRANSITION_INTERVAL = 4000
const PHRASE_TRANSITION_INTERVAL = 4000

export default function Home() {
  const containerRef = useRef(null)
  const imageIntervalRef = useRef(null)
  const phraseIntervalRef = useRef(null)
  const titleIntervalRef = useRef(null)
  const { width } = useWindowSize()

  // Determine if mobile based on screen width
  const isMobile = width <= 768

  // Determine images based on screen width
  const images = isMobile ? [mobileImage1, mobileImage2] : [desktopImage1, desktopImage2]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [isImageTransitioning, setIsImageTransitioning] = useState(false)

  // Preload images for smoother transitions
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [images])

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end start"],
  })

  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const phraseY = useTransform(scrollYProgress, [0, 0.3], [0, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3])

  // Image transition
  useEffect(() => {
    imageIntervalRef.current = setInterval(() => {
      setIsImageTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
        setIsImageTransitioning(false)
      }, 300) // Short delay for smoother transition
    }, IMAGE_TRANSITION_INTERVAL)

    return () => {
      clearInterval(imageIntervalRef.current)
    }
  }, [images.length])

  // Phrase transition
  useEffect(() => {
    phraseIntervalRef.current = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % PHRASES.length)
    }, PHRASE_TRANSITION_INTERVAL)

    return () => {
      clearInterval(phraseIntervalRef.current)
    }
  }, [])

  // Title transition
  useEffect(() => {
    titleIntervalRef.current = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length)
    }, TITLE_TRANSITION_INTERVAL)

    return () => {
      clearInterval(titleIntervalRef.current)
    }
  }, [])

  return (
      <motion.div ref={containerRef} className="relative h-screen w-full overflow-hidden" style={{ opacity }}>
        {/* Background Images with improved transitions */}
        <AnimatePresence mode="wait">
          <motion.div
              key={currentImageIndex}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70 z-20"></div>

        {/* Content - Positioned left for desktop, bottom right for mobile */}
        <div
            className={`absolute z-30 flex flex-col  ${
                isMobile
                    ? "items-end justify-end bottom-64 right-6 text-right "
                    : "items-start justify-center h-full left-12 md:left-16 lg:left-24 text-left"
            }`}
        >
          {/* Title with improved animations */}
          <motion.div style={{ y: titleY }} className={`${isMobile ? "" : ""}`}>
            <AnimatePresence mode="wait">
              <motion.h1
                  key={currentTitleIndex}
                  className={`${
                      isMobile ? "text-4xl" : "text-5xl md:text-7xl lg:text-8xl"
                  } font-Geist tracking-tight overflow-hidden text-white`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
              >
                {TITLES[currentTitleIndex].split(" ").map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.1 + index * 0.05,
                          ease: [0.215, 0.61, 0.355, 1],
                        }}
                        className={`inline-block ${isMobile ? "ml-4" : "mr-4"}`}
                    >
                      {word === "Bible" || word === "Home" ? <span className="italic font-semibold">{word}</span> : word}
                    </motion.span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          {/* Phrases with improved animations */}
          <motion.div
              style={{ y: phraseY }}
              className={`h-12 md:h-16 flex ${
                  isMobile ? "items-end justify-end" : "items-start justify-start"
              } overflow-hidden max-w-md`}
          >
            <AnimatePresence mode="wait">
              <motion.p
                  key={currentPhraseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className={`text-white/90 ${
                      isMobile ? "text-base" : "text-lg md:text-2xl lg:text-3xl"
                  } font-Geist font-light`}
              >
                {PHRASES[currentPhraseIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

        </div>
      </motion.div>
  )
}
