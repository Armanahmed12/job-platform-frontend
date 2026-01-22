import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, easeOut } from "framer-motion";
import team1 from "../../../assets/team/team1.jpg";
import team2 from "../../../assets/team/team2.jpg";

const HeroBanner = () => {
  return (
    <section className="hero bg-base-200 min-h-[420px]">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Visual Section */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center gap-6">
          <motion.img
            src={team1}
            alt="Professional team collaboration"
            animate={{ y: [40, 80, 40] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />

          <motion.img
            src={team2}
            alt="Job seekers working together"
            animate={{ x: [60, 120, 60] }}
            transition={{
              duration: 10,
              delay: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-3/5 lg:text-left">
          <div className="overflow-hidden">
            <motion.h1
             initial={{ y: "100%", opacity: 0, scale: 0.90 }}
              animate={{ y: "0%", opacity: 1, scale: 1 }}

              transition={{
                duration: 1,
                delay: 1,
                ease: "easeOut",
                // repeat: Infinity
              }}
              className="text-4xl lg:text-5xl font-bold leading-tight"
            >
              Build Your Career with{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  color: ["#2563eb", "#16a34a", "#dc2626"],
                }}
                transition={{
                  opacity: { delay: 1 },
                  color: { duration: 2, repeat: Infinity },
                }}
              >
                the Right Opportunity
              </motion.span>
            </motion.h1>
          </div>

          <p className="py-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Discover verified jobs from trusted companies, apply with
            confidence, and track your career progress — all in one smart and
            secure job platform built for modern professionals.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <button className="btn btn-primary px-8">Get Started</button>
            <button className="btn btn-outline px-8">Browse Jobs</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
