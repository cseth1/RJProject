import React from 'react';
import { motion } from 'framer-motion';

interface SliderDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

export const SliderDots: React.FC<SliderDotsProps> = ({ total, current, onDotClick }) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className="group p-2"
        >
          <motion.div
            animate={{
              scale: current === index ? 1.2 : 1,
              backgroundColor: current === index ? '#ffc000' : '#ffffff'
            }}
            className="w-3 h-3 rounded-full"
          />
        </button>
      ))}
    </div>
  );
}; 