"use client"

import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { motion } from "framer-motion"
import { Info } from "lucide-react"

const image1 = "/assets/img/gallery/churchImage1.jpeg"
const image2 = "/assets/img/gallery/churchImage2.jpeg"
const image3 = "/assets/img/gallery/churchImage3.jpeg"
const image4 = "/assets/img/gallery/churchImage4.jpeg"
const image5 = "/assets/img/gallery/churchImage5.jpeg"
const image6 = "/assets/img/gallery/churchImage6.jpeg"
const image7 = "/assets/img/gallery/churchImage7.jpeg"
const image8 = "/assets/img/gallery/churchImage8.jpeg"
const image9 = "/assets/img/gallery/churchImage9.jpeg"
const image10 = "/assets/img/gallery/churchImage10.jpeg"


// Define gallery images with metadata
const galleryImages = [
  {
    src: image1,
    alt: "lbc",
    description: "",
    className: "col-span-1 row-span-1 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2",
  },
  {
    src: image2,
    alt: "lbc",
    description: "",
    className: "col-span-1 row-span-1 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2",
  },
  {
    src: image3,
    alt: "lbc",
    description: "",
    className: "col-span-2 row-span-2 md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3",
  },
  {
    src: image4,
    alt: "lbc",
    description: "",
    className: "col-span-1 row-span-1 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3",
  },
  {
    src: image5,
    alt: "lbc",
    description: "",
    className: "col-span-1 row-span-1 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3",
  },
  {
    src: image6,
    alt: "lbc",
    description: "",
    className: "col-span-2 row-span-2 md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-5",
  },
  {
    src: image7,
    alt: "lbc",
    description: "",
    className: "col-span-1 row-span-1 md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4",
  },
  {
    src: image8,
    alt: "lbc",
    description: "",
    className: "col-span-1 row-span-1 md:col-start-4 md:col-end-5 md:row-start-3 md:row-end-4",
  },
  {
    src: image9,
    alt: "lbc",
    description: "",
    className: "col-span-1 row-span-1 md:col-start-3 md:col-end-4 md:row-start-4 md:row-end-5",
  },
  {
    src: image10,
    alt: "lbc",
    description: "",
    className: "col-span-1 row-span-1 md:col-start-4 md:col-end-5 md:row-start-4 md:row-end-5",
  },
]

const MediaGallery = () => {
  const [open, setOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const openLightbox = (index) => {
    setCurrentImage(index)
    setOpen(true)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
      <div className="py-16 bg-black text-white min-h-screen">
        <div className="container mx-auto px-4">
          <motion.h2
              className="text-4xl font-bold text-center mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
          >
            Our Gallery
          </motion.h2>

          <motion.p
              className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
          >
            A curated collection of visual stories captured through our lens. Hover over images to discover more.
          </motion.p>

          <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:grid-rows-4 auto-rows-[180px] md:auto-rows-[200px]"
              variants={containerVariants}
              initial="hidden"
              animate="show"
          >
            {galleryImages.map((image, index) => (
                <motion.div
                    key={index}
                    className={`relative overflow-hidden rounded-lg cursor-pointer ${image.className}`}
                    onClick={() => openLightbox(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    variants={itemVariants}
                >
                  <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />

                  {/* Info overlay on hover */}
                  <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-1">
                      <Info size={16} className="mr-2 text-white/80" />
                      <h3 className="text-white font-medium text-sm md:text-base">{image.alt}</h3>
                    </div>
                    <p className="text-white/70 text-xs md:text-sm">{image.description}</p>
                  </motion.div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-lg"></div>
                </motion.div>
            ))}
          </motion.div>

          <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={galleryImages.map((img) => ({
                src: img.src,
                alt: img.alt,
                title: img.alt,
                description: img.description,
              }))}
              index={currentImage}
          />
        </div>
      </div>
  )
}

export default MediaGallery
