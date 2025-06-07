"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const backgroundVariants = {
  enter: { opacity: 0 },
  center: {
    opacity: 1,
    transition: {
      opacity: { duration: 2, ease: "easeInOut" },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { duration: 1.2, ease: "easeOut" },
    },
  },
};

export default function HeroBackgroundSlider({ image }) {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      variants={backgroundVariants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      {/* <Image
        src={image.src}
        alt={image.alt}
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
      /> */}
       <Image
        src={image.src}
        alt={image.alt}
        fill                         // replaces the old `layout="fill"`
        style={{ objectFit: "cover" }} // replaces the old `objectFit="cover"`
        quality={90}
        priority
      />
      <div className="absolute inset-0 bg-black/75"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
    </motion.div>
  );
}
