'use client'
import Image from 'next/image'
import { motion } from "framer-motion"
import { useRef, useState } from 'react';

export function Invitation() {
  const [isClicked, setIsClicked] = useState(false);
  const [timed, setTimed] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setTimed(true);
    }, 2000);
    if (audioRef.current) {
      if (isClicked) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };
  
  return (
    <div>
      <audio ref={audioRef} src='/invitation-repo/audio/belos.mp3' className='hidden' />
      <motion.div
          className={`absolute inset-0 flex items-center justify-center bg-black cursor-pointer ${timed ? "hidden" : "block"}`}
          onClick={handleClick}
          animate={{ opacity: isClicked ? 0 : 1 , filter: isClicked ? "invert(1)" : "invert(0)" }}
          transition={{ opacity: {duration: 2 }, filter: {duration: 0.5} }}
        >
          <div className="text-center text-white">
            <Image
              src='/invitation-repo/img/blacksun.svg'
              width={300}
              height={300}
              alt="The Black Sun"
              className="mx-auto"
            />
            <p className="mt-4 text-xl">The age of XXIII is over.</p>
          </div>
      </motion.div>
      <motion.div
          animate={{ opacity: timed? 1 : 0}}
          transition={{ duration: 1.5 }}
          className={`h-full w-full flex items-center justify-center md:p-4 ${timed ? "block" : "hidden"}`}>
        <div
          id="frame"
          className="w-full h-full md:max-w-2xl bg-white border-8 border-black flex flex-col justify-between rounded-lg overflow-hidden"
        >
          <div className="relative flex justify-center items-center mt-6 w-full">
            <div className="md:block hidden absolute w-64 h-64 bg-white border-4 border-black rounded-full z-0">
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
            <div className="md:hidden block absolute w-32 h-32 bg-white border-4 border-black rounded-full z-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-[200px] bg-black rounded-full -z-10"
                style={{
                  transform: `rotate(${i * 30}deg) translate(0, -200px)`,
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
                src='/invitation-repo/img/black star.svg'
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
                src='/invitation-repo/img/white star.svg'
                width={500}
                height={500}
                alt="The Moon Tarot Card"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        <div className="w-full bg-white text-center justify-center items-center z-10">
            <p className="md:text-3xl text-2xl mt-4"><span className='visible md:hidden'>~ </span>Bring your Own Bottle ~ Costume Party</p>
            <hr className="my-3 mx-14 border-2 border-black rounded-2xl opacity-80"></hr>
            <p className="text-xl md:text-2xl">October 12th, 2024 • 8 PM</p>
            <a className="text-xl md:text-2xl underline text-slate-800" href="https://www.google.com/maps?q=18.5131602,-69.9383322&entry=gps&lucs=,94242478,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTM0LjIuODYzNzAYACCenQoqYyw5NDI0MjQ3OCw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICRE8%3D&g_st=com.google.maps.preview.copy&g_st=com.google.maps.preview.copy">Ave. Belice, C7 Villas de Cuesta Hermosa</a>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center mt-6 pt-2 pb-4 bg-black w-full z-10">Raul&apos;s Hallows Eve</h1>
        <div className="text-center justify-center items-center bg-white z-10">
          <motion.p initial="hidden" animate="visible" transition={{duration : 3}} className="text-lg mt-4 italic mb-10">Burn this card after reading</motion.p>
        </div>
        </div>
      </motion.div>
    </div>
  )
}
