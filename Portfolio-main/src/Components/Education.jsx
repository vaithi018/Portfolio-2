import React from "react";
import { motion } from "framer-motion";

const EducationExperience = () => {
  return (
    <div className="min-h-screen text-white px-6 py-12 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl"
      >
        <motion.h6
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-indigo-400"
        >
          Education
        </motion.h6>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col text-xl border border-gray-600 rounded-lg font-semibold p-6 bg-gray-900/40 space-y-3 shadow-lg mb-12 backdrop-blur-sm"
        >
          <p>
            <span className="block mb-1 text-lg text-indigo-300">College</span>
            <span className="block text-base text-gray-200 font-normal">
              National Engineering College
            </span>
          </p>
          <p>
            <span className="block mb-1 text-lg text-indigo-300">Course</span>
            <span className="block text-base text-gray-200 font-normal">
              B.E Computer Science and Engineering
            </span>
          </p>
          <p>
            <span className="block mb-1 text-lg text-indigo-300">Duration</span>
            <span className="block text-base text-gray-200 font-normal">
              Sep 2022 - Apr 2026
            </span>
          </p>
        </motion.div>

        <motion.h6
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6 text-indigo-400"
        >
          Experience
        </motion.h6>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col text-xl border border-gray-600 rounded-lg font-semibold p-6 bg-gray-900/40 space-y-3 shadow-lg mb-12 backdrop-blur-sm"
        >
          <p>
            <span className="block mb-1 text-lg text-indigo-300">Role</span>
            <span className="block text-base text-gray-200 font-normal">
              DevOps Engineer
            </span>
          </p>
          <p>
            <span className="block mb-1 text-lg text-indigo-300">Company</span>
            <span className="block text-base text-gray-200 font-normal">
              Nextcad
            </span>
          </p>
          <p>
            <span className="block mb-1 text-lg text-indigo-300">Duration</span>
            <span className="block text-base text-gray-200 font-normal">
              Feb 2026 - Present
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EducationExperience;