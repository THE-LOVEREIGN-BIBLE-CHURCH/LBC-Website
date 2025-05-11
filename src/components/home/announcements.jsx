"use client";

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const events = [
  {
    image: "/assets/img/flyers/newEvent.jpeg",
    title: "Business Plan Workshop",
    date: "12th May, 2025",
    time: "7:00PM GMT",
    description: "",
    phone: "024 237 1411",
  },
  {
    image: "/assets/img/flyers/wordexplosion.jpeg",
    title: "Word Explosion Conference",
    date: "14th - 15th May 2025",
    time: "6:00PM GMT Each Night",
    description: "",
    phone: "024 237 1411",
  },
  {
    image: "/assets/img/flyers/businessmen.jpeg",
    title: "Apostolic Encounter",
    date: "22nd - 23rd May 2025",
    time: "6:00PM GMT Each Night",
    description: "",
    phone: "024 237 1411",
  },
  {
    image: "/assets/img/flyers/trilogy.jpeg",
    title: "The Triology",
    date: "8th June 2025",
    time: "2:00PM GMT",
    description: "",
    phone: "024 237 1411",
  },
];

export default function Announce() {
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const bigTextVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  if (loading) {
    return (
      <div className="relative text-white font-instrument z-40 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Header skeleton */}
          <div className="w-3/4 h-12 bg-gray-800 rounded-lg mx-auto mb-12 animate-pulse"></div>

          {/* Big text skeleton */}
          <div className="w-full h-20 bg-gray-800/70 rounded-lg mb-12 animate-pulse"></div>

          {/* Cards skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-800/50 rounded-xl p-6 animate-pulse"
              >
                <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div>
                <div className="w-3/4 h-6 bg-gray-700 rounded mb-4 mx-auto"></div>
                <div className="flex justify-center gap-4 mb-4">
                  <div className="w-24 h-4 bg-gray-700 rounded"></div>
                  <div className="w-24 h-4 bg-gray-700 rounded"></div>
                </div>
                <div className="w-full h-20 bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Custom arrow components for Slick
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 -ml-4 md:ml-0 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full backdrop-blur-sm border border-slate-700/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 -mr-4 md:mr-0 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full backdrop-blur-sm border border-slate-700/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    touchThreshold: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          swipeToSlide: true,
          touchThreshold: 3,
        },
      },
    ],
    customPaging: (i) => (
      <div className="w-3 h-3 mx-1 rounded-full bg-slate-600 hover:bg-teal-500 transition-colors duration-200"></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="relative text-white font-instrument z-40 py-16 px-4 bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-[0.03] z-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-teal-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-teal-500/5 blur-3xl"></div>
      </div>

      <motion.div
        variants={bigTextVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-5xl mx-auto mb-12 text-center"
      >
        <div className="relative">
          <div className="relative py-6 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-white to-teal-300 mb-2">
              UPCOMING EVENTS
            </h2>
            <p className="text-sm md:text-base text-slate-400 max-w-3xl mx-auto">
              Join us for these special gatherings and connect with our
              community
            </p>
          </div>
        </div>
      </motion.div>

      {/* Slider Component */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto"
      >
        <div className="relative pb-16 touch-slider-container">
          <Slider ref={sliderRef} {...settings} className="event-slider">
            {events.map((event, index) => (
              <div key={index} className="px-2">
                <motion.div
                  variants={cardVariants}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/90 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/30 shadow-xl h-full flex flex-col transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      draggable="false"
                    />
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {event.title}
                    </h2>

                    <div className="flex flex-col space-y-2 mb-4">
                      <div className="flex items-center text-teal-300">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center text-teal-300/80">
                        <Clock size={16} className="mr-2" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm mb-4 flex-grow">
                      {event.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-700/30">
                      <div className="flex items-center justify-between">
                        <a
                          href={`tel:${event.phone}`}
                          className="flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                        >
                          <Phone size={16} className="mr-2" />
                          <span>{event.phone}</span>
                        </a>
                        <a href={`tel:${event.phone}`}>
                          <button className="px-4 py-2 bg-teal-600/30 hover:bg-teal-600/50 text-white text-sm rounded-full transition-colors">
                            Call Now
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>

      {/* Custom CSS for Slick */}
      <style jsx global>{`
        .event-slider .slick-dots {
          bottom: -30px;
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 4px;
        }

        .event-slider .slick-dots li {
          margin: 0;
          width: auto;
          height: auto;
        }

        .event-slider .slick-dots li.slick-active div {
          background-color: rgb(20 184 166);
          transform: scale(1.2);
        }

        .event-slider .slick-track {
          display: flex !important;
        }

        .event-slider .slick-slide {
          height: inherit !important;
          display: flex !important;
        }

        .event-slider .slick-slide > div {
          display: flex;
          height: 100%;
          width: 100%;
        }

        /* Improve touch handling */
        .event-slider .slick-list {
          touch-action: pan-y;
          -webkit-overflow-scrolling: touch;
        }

        /* Ensure slides are properly sized for touch */
        @media (max-width: 640px) {
          .event-slider .slick-slide {
            pointer-events: auto !important;
          }

          .event-slider .slick-track {
            touch-action: pan-y;
          }
        }
      `}</style>
    </div>
  );
}
