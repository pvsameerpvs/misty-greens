"use client";

import React, { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const ROMANTIC_ELEMENTS = 40;

export function RomanticDecorations() {
  const [elements, setElements] = useState<{ id: number, x: number; delay: number; duration: number; size: number; type: 'heart' | 'sparkle' | 'petal' }[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: ROMANTIC_ELEMENTS }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 10 + Math.random() * 15,
      size: 10 + Math.random() * 20,
      type: (['heart', 'sparkle', 'petal'][Math.floor(Math.random() * 3)]) as 'heart' | 'sparkle' | 'petal'
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        .romantic-element {
          position: absolute;
          top: -10vh;
          animation: fall linear infinite;
        }
      `}</style>
      {elements.map((el) => (
        <div
          key={el.id}
          className="romantic-element"
          style={{
            left: `${el.x}%`,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
            width: el.size,
            height: el.size,
          }}
        >
          {el.type === 'heart' && <Heart className="text-pink-400 fill-pink-400/30 w-full h-full opacity-60" />}
          {el.type === 'sparkle' && <Sparkles className="text-amber-200 w-full h-full opacity-40" />}
          {el.type === 'petal' && (
            <div className="w-full h-full bg-pink-200/40 rounded-full rotate-45" style={{ borderRadius: '0% 100% 0% 100%' }} />
          )}
        </div>
      ))}
    </div>
  );
}
