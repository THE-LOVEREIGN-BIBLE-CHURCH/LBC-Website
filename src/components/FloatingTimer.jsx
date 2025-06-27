import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FloatingTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const targetDate = new Date("July 16, 2025 09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <motion.div
        className="fixed bottom-8 right-8 z-50 cursor-pointer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        onClick={toggleModal}
      >
        <div className="bg-red-600 text-white rounded-full p-3 shadow-lg flex flex-col items-center justify-center">
          <div className="text-xs font-bold">YMNI</div>
          <div className="text-sm font-bold">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </div>
          <div className="text-xs mt-1">Click for details</div>
        </div>
      </motion.div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <motion.div
            className="bg-white p-4 rounded-lg max-w-md w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/assets/img/flyers/countdown.jpeg"
                alt="Event Flyer"
                className="max-w-full h-auto rounded-md shadow-md"
              />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default FloatingTimer;
