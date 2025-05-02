"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import useWindowSize from "../../hooks/useWindowSize"

// Import your images
const mobileImage1 = '/assets/img/backgroundImages/ourstorymobile2.jpg'
const mobileImage2 = '/assets/img/backgroundImages/ourstorymobile1.jpg'
const desktopImage1= '/assets/img/backgroundImages/ourstorydesktop1.jpg'
const desktopImage2= '/assets/img/backgroundImages/ourstorydesktop2.jpg'
const desktopImage3= '/assets/img/backgroundImages/ourstorydesktop3.jpg'
const desktopImage4= '/assets/img/backgroundImages/ourstorydesktop4.jpg'
const desktopImage5= '/assets/img/backgroundImages/ourstorydesktop5.jpg'

const Home = () => {
  const { width } = useWindowSize()
  const containerRef = useRef(null)

  // Define images for mobile and desktop views
  const mobileImages = [mobileImage1, mobileImage2]
  const desktopImages = [desktopImage1, desktopImage2, desktopImage3, desktopImage4, desktopImage5]

  // Determine images based on screen size
  const isMobile = width <= 768
  const images = isMobile ? mobileImages : desktopImages

  // State for current image index and transition
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [previousImageIndex, setPreviousImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end start"],
  })

  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Preload images
  useEffect(() => {
    images.forEach((imageSrc) => {
      const img = new Image()
      img.src = imageSrc
    })
  }, [images])

  // Change background image periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousImageIndex(currentImageIndex)
      setIsTransitioning(true)
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 6000) // Change image every 6 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [currentImageIndex, images.length])

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.div ref={containerRef} className="relative h-screen w-full overflow-hidden" style={{ opacity }}>
      {/* Background Images with Crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onAnimationComplete={() => setIsTransitioning(false)}
        />
      </AnimatePresence>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80 z-20"></div>

      {/* Content */}
      <div className={`relative z-30 flex flex-col items-center justify-center text-center h-full px-4 ${isMobile ? "-mt-48" : "mt-0"}`}>
        {/* Title Animation */}
        <motion.div style={{ y: titleY }}>
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide text-white"
          >
            <span className="font-bold">Our</span>{" "}
            <span className="italic font-bold">Story</span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <div className="mt-6 md:mt-8">
          <p className="text-base md:text-xl text-white/80 font-light tracking-wide">
            Discover the journey that defines us.
          </p>
        </div>

        {/* Decorative line */}
        <motion.div
          className="w-16 h-px bg-purple-300/50 mt-8"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 h-[25vh] w-full bg-gradient-to-t from-[#1B172F] to-transparent z-20"></div>
    </motion.div>
  )
}

export default Home