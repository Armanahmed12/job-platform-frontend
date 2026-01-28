import React, { useEffect, useState, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';

const Counter = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  
  // 1. Create a reference to the element and track if it's in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // 2. Only start the animation if isInView is true
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
      
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [value, count, rounded, isInView]);

  // 3. Attach the ref to the span so Framer Motion can "see" it
  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const StatsSection = () => {
  const stats = [
    { number: 25, suffix: " K+", label: "Completed Cases" },
    { number: 17, suffix: " +", label: "Our Office" },
    { number: 86, suffix: " +", label: "Skilled People" },
    { number: 28, suffix: " +", label: "CHappy Clients" },
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <h2 className="text-4xl font-extrabold text-blue-600">
                <Counter value={stat.number} suffix={stat.suffix} />
              </h2>
              <h3 className="text-lg font-bold text-gray-800">{stat.label}</h3>
              <p className="text-gray-500 text-sm max-w-[220px] mx-auto">
                We always provide people a complete solution upon focused of any business.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;