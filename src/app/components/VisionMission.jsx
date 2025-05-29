"use client"

import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export function MissionVision() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">
    <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-gray-50">Our Mission & Vision</h2>
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
        
        {/* Mission */}
        <motion.div 
          className="flex-1 max-w-lg space-y-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-semibold text-white">Our Mission</h3>
          <p className="text-lg text-gray-50 leading-relaxed">
            To transform life and business in the Oman by making every interaction simple, every process predictable,
            and every outcome successful. We are committed to empowering our clients with innovative solutions, personalized
            support, and unwavering dedication—ensuring they thrive in a dynamic and evolving environment.
          </p>
          {/* <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={images.mission}
              alt="Mission Image"
              fill
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL={images.mission}
              priority
            />
          </div> */}
        </motion.div>

        {/* Vision */}
        <motion.div 
          className="flex-1 max-w-lg space-y-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-semibold text-white">Our Vision</h3>
          <p className="text-lg text-gray-50 leading-relaxed">
            To become the most trusted and sought-after partner in the Oman, recognized for driving exceptional value and sustainable
            success for individuals and businesses alike. We envision a future where our clients confidently navigate challenges,
            seize opportunities, and realize their full potential through our expertise and passion for excellence.
          </p>
          {/* <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={images.vision}
              alt="Vision Image"
              fill
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL={images.vision}
              priority
            />
          </div> */}
        </motion.div>
      </div>
      </div>
    </section>
  )
}
