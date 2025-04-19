"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for your interest! This is a demo form.");
    setFormData({ name: "", email: "", interest: "" });
  };

  return (
    <section id="contact" className="w-full py-20 px-6 sm:px-12 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center space-y-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold leading-tight"
        >
          Interested in MemoTag?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-300"
        >
          Caregivers and healthcare providers can sign up for updates or request a demo. Let&apos;s make dementia care smarter together.
        </motion.p>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-left bg-white/10 backdrop-blur-md p-8 rounded-xl relative z-10 border border-transparent"
            style={{
              backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
              boxShadow: "0 0 10px rgba(200, 160, 255, 0.5)"
            }}
          >
            <div className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white text-black"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="bg-white text-black"
                required
              />
              <Input
                type="text"
                name="interest"
                placeholder="Caregiver, Doctor, Family Member..."
                value={formData.interest}
                onChange={handleChange}
                className="bg-white text-black"
              />
            </div>

            <Button type="submit" className="w-full text-white bg-purple-600 hover:bg-purple-700">
              Request a Demo
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}