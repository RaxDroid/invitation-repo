'use client'
import Image from 'next/image'
import { motion } from "framer-motion"
import black_star from '../public/img/black star.svg'
import white_star from '../public/img/white star.svg'

export function Invitation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <audio  autoPlay loop src="/audio/belos.mp3" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        id="frame"
        className="relative w-full max-w-2xl aspect-[1/1.4] bg-white border-8 border-black my-auto flex flex-col justify-between rounded-lg overflow-hidden"
      >
        <div className="relative flex justify-center items-center mt-6 w-full">
          <div className="absolute w-64 h-64 bg-white border-4 border-black rounded-full z-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-[450px] bg-black rounded-full -z-10"
              style={{
                transform: `rotate(${i * 30}deg) translate(0, -400px)`,
                transformOrigin: "center center",
                top: "-45%",
                left: "50%",
              }}
            />
          ))}
          </div>
          <h1 className="text-4xl md:text-5xl py-2 text-black text-center z-10">
            XXIV
          </h1>
        </div>
        <div className="flex justify-center items-center flex-grow my-10 mx-10">
          <motion.div
            initial={{
              filter: "invert(0)"
            }}
            transition={{y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            ,'filter': { duration: 0.5, repeatDelay:8, repeat: Infinity}}}
            animate={{y: ["20%", "-10%", "20%"]
              ,'filter': ['invert(1)', 'invert(1)', 'invert(0)']
            }}
            className="w-1/2 pr-4"
          >
            <Image
              src={black_star}
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
            animate={{ y: ["-10%", "20%", "-10%"] 
              ,'filter': ['invert(1)', 'invert(1)', 'invert(0)']
            }}
            
            className="w-1/2 pl-4"
          >
            <Image
              src={white_star}
              width={500}
              height={500}
              alt="The Moon Tarot Card"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      <div className="w-full bg-white text-center justify-center items-center z-10">
          <p className="text-3xl mt-4">Bring your Own Bottle ~ Costume Party</p>
          <hr className="my-3 mx-14 border-2 border-black rounded-2xl opacity-80"></hr>
          <p className="text-2xl">October 12th, 2024 • 8 PM</p>
          <a className="text-2xl underline text-slate-800" href="https://maps.app.goo.gl/Qsx4T7AhbDsMv5iu8">Ave. Belice, C7 Villas de Cuesta Hermosa</a>
      </div>
      <h1
          className="text-4xl md:text-5xl font-bold text-white text-center mt-6 pt-2 pb-4 bg-black w-full"
        >
          Raul&apos;s Hallows Eve
        </h1>
      <div className="text-center justify-center items-center">
        <motion.p initial="hidden" animate="visible" className="text-lg mt-4 italic mb-10">Burn this card after reading</motion.p>
      </div>
      </motion.div>
    </div>
  )
}
