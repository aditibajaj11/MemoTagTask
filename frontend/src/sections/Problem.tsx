"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const stats = [
  {
    title: "55M+ People",
    description: "are living with dementia globally in 2024.",
  },
  {
    title: "3 in 4 Cases",
    description: "go undiagnosed due to lack of awareness and tools.",
  },
  {
    title: "Caregiver Burnout",
    description: "is one of the top mental health concerns for families.",
  },
];

const chartData = {
  labels: ["Diagnosed Cases", "Undiagnosed Cases"],
  datasets: [
    {
      label: "Dementia Diagnosis",
      data: [25, 75],
      backgroundColor: ["#7C3AED", "#F472B6"],
      borderColor: "#ffffff",
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        color: "#fff",
      },
    },
  },
};

export default function Problem() {
  return (
    <section className="w-full py-20 px-6 sm:px-12 bg-white text-black border-y border-gray-200">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Gradient Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-400 to-orange-400 leading-normal pb-2"
        >
          The Problem We’re Solving
        </motion.h2>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glow-border rounded-xl h-full"
            >
              <Card className="relative z-10 bg-[#1f1f1f] border border-gray-700 text-left rounded-xl overflow-hidden shadow-md h-full">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-purple-400">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pie Chart */}
        <div className="mt-16 max-w-md mx-auto">
          <div className="glow-border rounded-xl">
            <Card className="bg-[#1f1f1f] border border-transparent rounded-xl shadow-md">
              <CardContent className="px-4 py-5">
                <h3 className="text-xl font-semibold mb-4 text-center text-purple-400">
                  Diagnosed vs Undiagnosed Dementia Cases
                </h3>
                <div className="h-64 flex items-center justify-center">
                  <Pie data={chartData} options={chartOptions} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Animated Card Border */}
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
