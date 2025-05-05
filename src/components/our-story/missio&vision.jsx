"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function Vision() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
      <div
          ref={containerRef}
          className="relative min-h-[80vh] flex items-center justify-center py-16 px-4 bg-gradient-to-b from-[#0a0a1a] to-[#111133] text-white"
      >
        {/* Simple subtle background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-[0.02]"></div>

        {/* Subtle gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>

        <div className="container mx-auto max-w-3xl">
          <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="bg-black/30 backdrop-blur-sm border border-amber-500/10 rounded-xl p-8 md:p-12 shadow-lg"
          >
            {/* Simple elegant header */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-8">
              Our <span className="text-amber-300 font-normal">Vision</span>
            </h1>

            {/* Decorative divider */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-12 bg-amber-400/30"></div>
              <div className="mx-4 text-amber-400">✦</div>
              <div className="h-px w-12 bg-amber-400/30"></div>
            </div>

            {/* Vision content with enhanced typography */}
            <p className="text-lg md:text-xl leading-relaxed text-gray-200 text-center max-w-2xl mx-auto">
              Our vision is to be a Christ-centered church that leads people into a deeper relationship with God and advances His Kingdom on earth. We envision a community where lives are transformed by the power of the Holy Spirit, where faith is nurtured, and where every person discovers their divine purpose and calling.
            </p>

            {/* Simple elegant footer accent */}
            <div className="mt-10 flex justify-center">
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
  )
}
