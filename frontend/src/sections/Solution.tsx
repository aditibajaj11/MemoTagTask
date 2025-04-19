"use client";

import { motion } from "framer-motion";
//import { Player } from "@lottiefiles/react-lottie-player";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";
const LottieAnimation = dynamic(() => import('@/components/ui/LottieAnimation'), { ssr: false });

export default function Solution() {
  return (
    <section className="w-full py-20 px-6 sm:px-12 bg-[#f6f9ff] dark:bg-[#2c2c3a] text-gray-800 dark:text-white relative border-y border-gray-200">
      {/* Background Lottie animation - Same direct approach as Hero */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 sm:opacity-40 pointer-events-none z-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          <LottieAnimation src="/AI-Animation.json" height={500} width={500} />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-400 to-orange-400 leading-relaxed pb-2"
        >
          How MemoTag Works
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 1 - Physical Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glow-border"
          >
            <Card className="relative z-10 bg-[#1f1f1f] border border-gray-700 text-left rounded-xl shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 min-w-[64px]">
                  <LottieAnimation src="/tracker.json" height={"100%"} width={"100%"} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400">
                      Physical Tracking
                    </h3>
                    <p className="mt-2 text-gray-300">
                      Track the physical health metrics of dementia patients, including activity levels, heart rate, and sleep patterns.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2 - Cognitive Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="glow-border"
          >
            <Card className="relative z-10 bg-[#1f1f1f] border border-gray-700 text-left rounded-xl shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 min-w-[64px]">
                  <LottieAnimation src="/cognitive.json" height={"100%"} width={"100%"} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400">
                      Cognitive Tracking
                    </h3>
                    <p className="mt-2 text-gray-300">
                      Monitor cognitive performance through tests, memory exercises, and daily interactions, ensuring timely intervention.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .glow-border {
          position: relative;
          z-index: 0;
          border-radius: 1rem;
        }

        .glow-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          z-index: -1;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(
            130deg,
            rgba(147, 51, 234, 1),
            rgba(236, 72, 153, 1),
            rgba(14, 165, 233, 1),
            rgba(147, 51, 234, 1)
          );
          background-size: 400% 400%;
          animation: glowing-border 6s linear infinite;
          filter: blur(4px);
          opacity: 1;
        }

        @keyframes glowing-border {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}