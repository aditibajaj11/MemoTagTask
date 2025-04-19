"use client";

import { motion } from "framer-motion";

import dynamic from "next/dynamic";
const LottieAnimation = dynamic(() => import('@/components/ui/LottieAnimation'), { ssr: false });


export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden">
      
      <div className="z-10 text-center space-y-6 px-4">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Empowering Lives with AI-Driven Dementia Care
          </h1>
          <p className="text-lg sm:text-xl max-w-xl mx-auto">
            Revolutionizing care with artificial intelligence to provide personalized solutions for dementia patients.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 px-8 py-3 bg-orange-500 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300"
          >
            Get Started
          </a>
        </motion.div>
      </div>

      {/* Lottie Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 sm:opacity-40">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          <LottieAnimation src="/AI-Animation.json" height="500px" width="500px" />

        </motion.div>
      </div>
    </section>
  );
}


