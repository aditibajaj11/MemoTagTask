"use client";

import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import dynamic from "next/dynamic";
const LottieAnimation = dynamic(() => import('@/components/ui/LottieAnimation'), { ssr: false });


export default function About() {
  return (
    <section className="relative w-full py-24 px-6 sm:px-12 bg-white dark:bg-[#2c2f3f] text-gray-800 dark:text-white overflow-hidden border-y border-gray-200">
      
      {/* 🎬 Background Lottie Animation - Centered & Large */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[500px] sm:w-[700px] lg:w-[900px] xl:w-[1000px]">
        <LottieAnimation src="/AI-Animation.json" height="100%" width="100%" />
        </div>
      </div>

      {/* 🌟 Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-14">
        
        {/* ✨ Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 leading-normal overflow-visible pb-2"
        >
          About MemoTag
        </motion.h2>

        {/* 📝 Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-6xl mx-auto leading-relaxed"
        >
          MemoTag is an <span className="font-semibold text-purple-600 dark:text-purple-400">AI-powered dementia care platform</span> designed to assist caregivers,
          doctors, and families in tracking and supporting individuals facing cognitive
          challenges. With cutting-edge monitoring tools and personalized recommendations,
          MemoTag brings <span className="italic text-pink-500 dark:text-pink-400">peace of mind</span> through smart, compassionate technology.
        </motion.p>

        {/* 🚀 Why Section */}
        <div className="space-y-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-purple-600 dark:text-purple-400"
          >
            Why MemoTag Stands Out
          </motion.h3>

          <ul className="max-w-4xl mx-auto text-left space-y-4 text-base sm:text-lg text-gray-800 dark:text-gray-200">
            <li><strong>🩺 Comprehensive Monitoring:</strong> Tracks sleep patterns, fall detection, GPS location, and geofencing alerts.</li>
            <li><strong>🧠 AI-Driven Insights:</strong> Analyzes cognitive patterns to provide actionable insights for caregivers.</li>
            <li><strong>🎯 Personalized Recommendations:</strong> Offers exercises and insights based on ongoing cognitive analysis.</li>
            <li><strong>🔐 Privacy First:</strong> Encrypted and compliant with global standards like GDPR and HIPAA.</li>
          </ul>
        </div>

        {/* 📈 Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h4 className="text-3xl font-bold text-purple-600 dark:text-purple-400">10,000+</h4>
            <p className="text-gray-600 dark:text-gray-300">Insights Collected</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-3xl font-bold text-purple-600 dark:text-purple-400">35,000+</h4>
            <p className="text-gray-600 dark:text-gray-300">Hospitals & Patient Network</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-3xl font-bold text-purple-600 dark:text-purple-400">500+</h4>
            <p className="text-gray-600 dark:text-gray-300">Lives Impacted</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
