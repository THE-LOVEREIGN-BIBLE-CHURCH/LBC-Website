"use client";

import React, { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Twitch,
  Music,
  Video,
  Podcast,
} from "lucide-react";

export default function AnimatedBackground() {
  const [icons, setIcons] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Create floating icons
    const iconComponents = [
      <Facebook key="facebook" />,
      <Instagram key="instagram" />,
      <Twitter key="twitter" />,
      <Youtube key="youtube" />,
      <Twitch key="twitch" />,
      <Music key="music" />,
      <Video key="video" />,
      <Podcast key="podcast" />,
    ];

    const newIcons = [];

    for (let i = 0; i < 20; i++) {
      const randomIcon =
        iconComponents[Math.floor(Math.random() * iconComponents.length)];
      newIcons.push({
        id: i,
        icon: randomIcon,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 30 + 20, // Size between 20-50px
        opacity: Math.random() * 0.3 + 0.1, // Opacity between 0.1-0.4
        speedX: (Math.random() - 1) * 1, // Random speed in both directions
        speedY: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
      });
    }

    setIcons(newIcons);

    // Handle window resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Animation frame
    let animationFrameId;

    const animate = () => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => {
          let newX = icon.x + icon.speedX;
          let newY = icon.y + icon.speedY;
          const newRotation = icon.rotation + icon.rotationSpeed;

          // Bounce off edges
          if (newX < 0 || newX > dimensions.width) {
            icon.speedX *= -1;
            newX = icon.x + icon.speedX;
          }

          if (newY < 0 || newY > dimensions.height) {
            icon.speedY *= -1;
            newY = icon.y + icon.speedY;
          }

          return {
            ...icon,
            x: newX,
            y: newY,
            rotation: newRotation,
          };
        }),
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute"
          style={{
            left: `${icon.x}px`,
            top: `${icon.y}px`,
            opacity: icon.opacity,
            transform: `rotate(${icon.rotation}deg)`,
            color: "white",
            width: `${icon.size}px`,
            height: `${icon.size}px`,
          }}
        >
          {React.cloneElement(icon.icon, {
            size: icon.size,
            className: "text-white",
          })}
        </div>
      ))}
    </div>
  );
}
