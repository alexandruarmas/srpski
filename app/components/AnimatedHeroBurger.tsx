"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AnimatedHeroBurger() {
  const [isUnwrapped, setIsUnwrapped] = useState(false)

  useEffect(() => {
    // Start the unwrapping animation after component mounts
    const timer = setTimeout(() => {
      setIsUnwrapped(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        width="800"
        height="700"
        viewBox="0 0 800 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full max-h-full"
      >
        <defs>
          {/* Top Bun Gradients */}
          <radialGradient
            id="topBunGradient"
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.45"
            fy="0.4"
          >
            <stop offset="0%" stopColor="#F8D5A3" />
            <stop offset="40%" stopColor="#E6B66B" />
            <stop offset="90%" stopColor="#D19C4A" />
            <stop offset="100%" stopColor="#BA8737" />
          </radialGradient>
          
          {/* Bottom Bun Gradients */}
          <radialGradient
            id="bottomBunGradient"
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.45"
            fy="0.4"
          >
            <stop offset="0%" stopColor="#F0C279" />
            <stop offset="50%" stopColor="#D6A155" />
            <stop offset="90%" stopColor="#C28E44" />
            <stop offset="100%" stopColor="#B07E38" />
          </radialGradient>
          
          {/* Sesame Seeds Gradient */}
          <linearGradient id="sesameGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF8E1" />
            <stop offset="100%" stopColor="#F5E0B0" />
          </linearGradient>
          
          {/* Beef Patty Gradients */}
          <linearGradient id="pattyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6B3821" />
            <stop offset="50%" stopColor="#5A2C18" />
            <stop offset="100%" stopColor="#471F0F" />
          </linearGradient>
          
          {/* Second Beef Patty */}
          <linearGradient id="patty2Gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#612F19" />
            <stop offset="50%" stopColor="#512515" />
            <stop offset="100%" stopColor="#41190C" />
          </linearGradient>
          
          {/* Cheese Gradient */}
          <linearGradient id="cheeseGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFC743" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
          
          {/* Lettuce Gradient */}
          <linearGradient id="lettuceGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8CDC64" />
            <stop offset="100%" stopColor="#5DA641" />
          </linearGradient>
          
          {/* Tomato Gradient */}
          <linearGradient id="tomatoGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF6347" />
            <stop offset="100%" stopColor="#E02C17" />
          </linearGradient>
          
          {/* Drop Shadow Filter */}
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
            <feOffset dx="0" dy="10" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Gentle shadow underneath */}
        <motion.ellipse 
          cx="400" cy="620" rx="180" ry="20" fill="#000000" opacity="0.15"
          initial={{ opacity: 0 }}
          animate={{ opacity: isUnwrapped ? 0.15 : 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        
        {/* Bottom bun */}
        <motion.g 
          filter="url(#dropShadow)"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isUnwrapped ? 1 : 0, y: isUnwrapped ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ellipse cx="400" cy="570" rx="175" ry="35" fill="url(#bottomBunGradient)" />
          <path d="M260,565 Q400,585 540,565 L540,535 Q400,555 260,535 Z" fill="url(#bottomBunGradient)" />
        </motion.g>
        
        {/* Lettuce */}
        <motion.g 
          filter="url(#dropShadow)"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isUnwrapped ? 1 : 0, y: isUnwrapped ? 0 : 40 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <path d="M275,535 C310,520 345,535 380,520 C415,505 450,520 490,505 C525,490 560,505 590,490 L525,545 L275,545 Z" fill="url(#lettuceGradient)" />
          <path d="M285,530 C320,515 355,530 390,515 L390,540 L285,540 Z" fill="#96E172" opacity="0.8" />
          <path d="M445,520 C480,505 515,520 555,505 L515,540 L445,540 Z" fill="#96E172" opacity="0.8" />
        </motion.g>
        
        {/* First Meat patty */}
        <motion.g 
          filter="url(#dropShadow)"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isUnwrapped ? 1 : 0, y: isUnwrapped ? 0 : 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ellipse cx="400" cy="510" rx="170" ry="30" fill="url(#pattyGradient)" />
          
          {/* Patty texture */}
          <ellipse cx="350" cy="510" rx="30" ry="8" fill="#3D1C00" opacity="0.3" />
          <ellipse cx="450" cy="510" rx="25" ry="6" fill="#3D1C00" opacity="0.3" />
          
          {/* Grill marks */}
          <path d="M300,503 L360,507 M440,503 L500,507" 
                stroke="#1A0900" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M320,513 L380,517 M420,513 L480,517" 
                stroke="#1A0900" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        </motion.g>
        
        {/* Cheese - Melted */}
        <motion.g 
          filter="url(#dropShadow)"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isUnwrapped ? 1 : 0, y: isUnwrapped ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <path d="M280,480 H520 V505 Q470,515 400,500 Q330,490 280,505 Z" fill="url(#cheeseGradient)" />
          
          {/* Cheese hanging over edge */}
          <path d="M280,480 V510 Q277,512 274,510 Q271,509 268,505 Q266,500 263,490 Q270,485 280,480 Z" fill="url(#cheeseGradient)" />
          <path d="M520,480 V510 Q523,512 526,510 Q529,509 532,505 Q534,500 537,490 Q530,485 520,480 Z" fill="url(#cheeseGradient)" />
          
          {/* Cheese drips */}
          <motion.g
            animate={{
              y: [0, 3, 0],
              opacity: [1, 0.9, 1]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <path d="M330,495 V535 Q334,540 338,535 V495 Z" fill="url(#cheeseGradient)" />
            <path d="M470,495 V539 Q474,544 478,539 V495 Z" fill="url(#cheeseGradient)" />
            <path d="M400,494 V530 Q404,535 408,530 V494 Z" fill="url(#cheeseGradient)" />
          </motion.g>
        </motion.g>
        
        {/* Second Meat patty */}
        <motion.g 
          filter="url(#dropShadow)"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: isUnwrapped ? 1 : 0, y: isUnwrapped ? 0 : 25 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ellipse cx="400" cy="450" rx="165" ry="28" fill="url(#patty2Gradient)" />
          
          {/* Patty texture */}
          <ellipse cx="350" cy="450" rx="30" ry="8" fill="#3D1C00" opacity="0.3" />
          <ellipse cx="450" cy="450" rx="25" ry="6" fill="#3D1C00" opacity="0.3" />
          
          {/* Grill marks */}
          <path d="M300,443 L360,447 M440,443 L500,447" 
                stroke="#1A0900" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M320,453 L380,457 M420,453 L480,457" 
                stroke="#1A0900" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        </motion.g>
        
        {/* Tomato */}
        <motion.g 
          filter="url(#dropShadow)"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isUnwrapped ? 1 : 0, y: isUnwrapped ? 0 : 15 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <ellipse cx="400" cy="425" rx="160" ry="20" fill="url(#tomatoGradient)" />
          <ellipse cx="370" cy="425" rx="50" ry="8" fill="#FF8C78" opacity="0.5" />
          <ellipse cx="430" cy="425" rx="55" ry="7" fill="#FF8C78" opacity="0.5" />
          <path d="M280,425 Q360,430 400,423 Q445,418 520,425" stroke="#FFCCBC" strokeWidth="0.5" fill="none" />
        </motion.g>
        
        {/* Top bun with sesame seeds */}
        <motion.g 
          filter="url(#dropShadow)"
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ 
            opacity: isUnwrapped ? 1 : 0, 
            y: isUnwrapped ? 0 : 10,
            scale: isUnwrapped ? 1 : 0.95
          }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <motion.g
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
              ease: "easeInOut",
              delay: 1.8
            }}
          >
            <path d="M250,355 Q400,280 550,355 L550,395 Q400,325 250,395 Z" fill="url(#topBunGradient)" />
            <ellipse cx="400" cy="355" rx="175" ry="55" fill="url(#topBunGradient)" />
            
            {/* Bun texture/highlights */}
            <ellipse cx="370" cy="340" rx="70" ry="15" fill="#F8D5A3" opacity="0.3" />
            <ellipse cx="440" cy="340" rx="60" ry="10" fill="#F8D5A3" opacity="0.2" />
            
            {/* Sesame seeds */}
            <g>
              <ellipse cx="320" cy="335" rx="7" ry="5" fill="url(#sesameGradient)" transform="rotate(-10)" />
              <ellipse cx="350" cy="328" rx="7" ry="5" fill="url(#sesameGradient)" transform="rotate(5)" />
              <ellipse cx="380" cy="322" rx="7" ry="5" fill="url(#sesameGradient)" transform="rotate(-5)" />
              <ellipse cx="410" cy="320" rx="7" ry="5" fill="url(#sesameGradient)" transform="rotate(8)" />
              <ellipse cx="440" cy="325" rx="7" ry="5" fill="url(#sesameGradient)" transform="rotate(-12)" />
              <ellipse cx="470" cy="335" rx="7" ry="5" fill="url(#sesameGradient)" transform="rotate(5)" />
              <ellipse cx="335" cy="355" rx="7" ry="5" fill="url(#sesameGradient)" transform="rotate(15)" />
              <ellipse cx="365" cy="347" rx="7" ry="5" fill="url(#sesameGradient)" transform="rotate(-8)" />
              <ellipse cx="395" cy="342" rx="7" ry="5" fill="url(#sesameGradient)" transform="rotate(10)" />
              <ellipse cx="425" cy="345" rx="7" ry="5" fill="url(#sesameGradient)" transform="rotate(-6)" />
              <ellipse cx="455" cy="355" rx="7" ry="5" fill="url(#sesameGradient)" transform="rotate(12)" />
            </g>
          </motion.g>
        </motion.g>
      </svg>
    </div>
  )
} 