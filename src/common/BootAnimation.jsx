import { motion } from "framer-motion";
import { useEffect } from "react";
import "./BootAnimation.css";

export default function BootAnimation({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish && onFinish();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="boot-animation"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.2, duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="intro-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="intro-title"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          Welcome to my Portfolio
        </motion.h1>

        <motion.p
          className="intro-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Loading…
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
