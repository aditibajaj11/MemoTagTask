"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

function AnimatedCounter({ from = 0, to = 1000, duration = 1.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(from);
  const spring = useSpring(motionValue, { duration, stiffness: 100 });
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          setCurrent(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="text-purple-600 dark:text-purple-400">
      {current.toLocaleString()}
      {to > 1000 ? "+" : ""}
    </span>
  );
}

const tractionData = [
  {
    number: 2200,
    label: "Preorders",
    description:
      "Received from eldercare agencies, totaling ₹3.3 crore in value.",
  },
  {
    number: 8,
    label: "Partnerships",
    description: "Collaborations with eldercare brands like SMS Group.",
  },
  {
    number: 35000,
    label: "Hospital Network",
    description: "Access to a vast network enhancing reach and impact.",
  },
  {
    number: 10000,
    label: "Insights Collected",
    description: "Data-driven insights to improve dementia care solutions.",
  },
  {
    number: 500,
    label: "Lives Impacted",
    description: "Families positively affected by MemoTag's platform.",
  },
];

export default function Traction() {
  return (
    <section className="w-full py-20 px-6 sm:px-12 bg-white dark:bg-[#1a1a27] text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500"
        >
          Real Traction, Real Impact
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tractionData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <div className="glow-border rounded-xl h-full">
                <Card className="bg-[#f7f9fc] dark:bg-[#242432] border border-transparent rounded-xl shadow-md h-full flex flex-col">
                  <CardContent className="p-6 space-y-2 flex flex-col flex-grow">
                    <h3 className="text-3xl font-bold">
                      <AnimatedCounter
                        to={item.number}
                        duration={1.5 + index * 0.3}
                      />{" "}
                      <span className="text-xl text-purple-400">{item.label}</span>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add animated border CSS below */}
      <style jsx global>{`
        .glow-border {
          position: relative;
          padding: 1.5px;
          border-radius: 0.75rem;
          background: linear-gradient(
            130deg,
            #9333ea,
            #ec4899,
            #0ea5e9,
            #9333ea
          );
          background-size: 400% 400%;
          animation: glowing-border 6s linear infinite;
          height: 100%;
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

