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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', interest: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again later.');
    }
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
          Caregivers and healthcare providers can sign up for updates or request a demo. Let&aposs;s make dementia care smarter together.
        </motion.p>

        <motion.div
          className="glow-border-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-left bg-white/10 backdrop-blur-md p-8 rounded-xl relative z-10"
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

      <style jsx global>{`
        .glow-border-form {
          position: relative;
          z-index: 1;
          border-radius: 1rem;
        }

        .glow-border-form::before {
          content: '';
          position: absolute;
          inset: -2px;
          z-index: -1;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(
            130deg,
            rgba(255, 255, 255, 0.8),
            rgba(200, 160, 255, 0.8),
            rgba(160, 200, 255, 0.8),
            rgba(255, 255, 255, 0.8)
          );
          background-size: 400% 400%;
          animation: glowing-border 8s linear infinite;
          filter: blur(6px);
          opacity: 0.7;
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
