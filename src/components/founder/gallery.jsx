"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Image paths
const image1 = "/assets/img/gallery/pastorImage1.jpeg"
const image2 = "/assets/img/gallery/pastorImage2.jpeg"
const image3 = "/assets/img/gallery/pastorImage3.jpeg"
const image4 = "/assets/img/gallery/pastorImage4.jpeg"
const image5 = "/assets/img/gallery/pastorImage5.jpeg"
const image6 = "/assets/img/gallery/pastorImage6.jpeg"
const image7 = "/assets/img/gallery/pastorImage7.jpeg"
const image8 = "/assets/img/gallery/pastorImage8.jpeg"
const image9 = "/assets/img/gallery/pastorImage9.jpeg"
const image10 ="/assets/img/gallery/pastorImage10.jpeg"

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null)

    // Define images with their specific grid positions
    const images = [
        // First row, first column
        { src: image1, alt: "Gallery Image 1", className: "col-start-1 col-end-2 row-start-1 row-end-2" },

        // First row, second column
        { src: image2, alt: "Gallery Image 2", className: "col-start-2 col-end-3 row-start-1 row-end-2" },

        // First and second rows, third and fourth columns (large image)
        { src: image3, alt: "Gallery Image 3", className: "col-start-3 col-end-5 row-start-1 row-end-3" },

        // Second row, first column
        { src: image4, alt: "Gallery Image 4", className: "col-start-1 col-end-2 row-start-2 row-end-3" },

        // Second row, second column
        { src: image5, alt: "Gallery Image 5", className: "col-start-2 col-end-3 row-start-2 row-end-3" },

        // Third and fourth rows, first and second columns (large image)
        { src: image6, alt: "Gallery Image 6", className: "col-start-1 col-end-3 row-start-3 row-end-5" },

        // Third row, third column
        { src: image7, alt: "Gallery Image 7", className: "col-start-3 col-end-4 row-start-3 row-end-4" },

        // Third row, fourth column
        { src: image8, alt: "Gallery Image 8", className: "col-start-4 col-end-5 row-start-3 row-end-4" },

        // Fourth row, third column
        { src: image9, alt: "Gallery Image 9", className: "col-start-3 col-end-4 row-start-4 row-end-5" },

        // Fourth row, fourth column
        { src: image10, alt: "Gallery Image 10", className: "col-start-4 col-end-5 row-start-4 row-end-5" },
    ]

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { duration: 0.3 },
        },
    }

    return (
        <div className="min-h-screen w-full py-16 px-4 bg-black">
            {/* Minimalist Title */}
            <motion.h1
                className="text-3xl sm:text-4xl font-medium text-white mb-12 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Photo Gallery
            </motion.h1>

            {/* Custom Grid Layout */}
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:grid-rows-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className={`relative cursor-pointer overflow-hidden ${image.className}`}
                            onClick={() => setSelectedImage(image)}
                            variants={itemVariants}
                        >
                            <img
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Minimalist Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white hover:text-gray-300 focus:outline-none"
                            aria-label="Close"
                        >
                            <X size={24} />
                        </button>
                        <motion.img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[90vh] object-contain"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
