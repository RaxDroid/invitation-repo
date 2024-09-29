'use client'
import Image from 'next/image'
import { motion } from "framer-motion"

export function Invitation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-2xl aspect-[1/1.4] bg-white border-8 border-black my-auto flex flex-col justify-between rounded-lg"
      >
        <h1
          className="text-4xl md:text-5xl py-2 text-white text-center mt-6 bg-black w-full"
        >
          Enrique&apos;s Hallows Eve
        </h1>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mb-8"
        >
          <svg viewBox="0 0 500 100" className="w-full">
            <path
              id="curve"
              d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
              fill="transparent"
            />
            <text width="500">
              <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
                <tspan className="text-xl md:text-2xl font-semibold">
                  You are cordially invited to
                </tspan>
              </textPath>
            </text>
          </svg>
        </motion.div>
        <div className="flex justify-center items-center flex-grow my-20 mx-10">
          <motion.div
            initial={{
              filter: "invert(0)"
            }}
            transition={{y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            ,'filter': { duration: 0.5, repeatDelay:8, repeat: Infinity}}}
            animate={{y: ["20%", "-20%", "20%"]
              ,'filter': ['invert(1)', 'invert(1)', 'invert(0)']
            }}
            className="w-1/2 pr-4"
          >
            <Image
              src="/img/black star.svg"
              width={500}
              height={500}
              alt="The Star Tarot Card"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{
              filter: "invert(0)"
            }}
            transition={{y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                         ,'filter': { duration: 0.5, repeatDelay:5, repeat: Infinity}}}
            animate={{ y: ["-20%", "20%", "-20%"] 
              ,'filter': ['invert(1)', 'invert(1)', 'invert(0)']
            }}
            
            className="w-1/2 pl-4"
          >
            <Image
              src='/img/white star.svg'
              width={500}
              height={500}
              alt="The Moon Tarot Card"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      <div className="text-center justify-center items-center">
          <p className="text-xl md:text-xl mt-4">Bring your Own Bottle ~ Costume Party</p>
          <p className="text-lg md:text-xl">October 12th, 2024 • 8 PM</p>
          <p className="text-lg md:text-xl">Ave. Belice, C7 Villas de Cuesta Hermosa</p>
      </div>
      <h1
          className="text-4xl md:text-5xl font-bold text-white text-center mt-6 py-2 bg-black w-full"
        >
          XXIV
        </h1>
      <div className="text-center justify-center items-center">
        <motion.p initial="hidden" animate="visible" className="text-lg mt-4 italic mb-10">Burn this card after reading</motion.p>
      </div>
      </motion.div>
    </div>
  )
}
