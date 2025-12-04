import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./BootAnimation.css";

export default function BootAnimation({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade-out animation
      setTimeout(() => {
        onFinish && onFinish(); // remove boot screen AFTER fade out
      }, 900); // match fade-out duration
    }, 3500); // extended boot time

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="boot-animation"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <motion.div
        className="intro-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h1
          className="intro-title"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.055, // perfect timing
                delayChildren: 0.35,
              },
            },
          }}
        >
          {"PORTFOLIO".split("").map((char, i) => (
            <motion.span
              key={i}
              className="char"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  filter: "blur(6px)",
                  clipPath: "inset(0 0 100% 0)", // fully masked
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  clipPath: "inset(0 0 0% 0)", // unmasked
                  transition: {
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1], // cinematic curve
                  },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          className="loading-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.9 }}
        />

        <motion.p
          className="intro-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{
            delay: 1.4,
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading Developer Profile…
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
