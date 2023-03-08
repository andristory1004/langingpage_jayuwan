"use client"
import { motion, useScroll } from 'framer-motion'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { scrollYProgress } = useScroll();

  return (
    <main>
      {/* <div className='h-1'></div> */}
      <motion.div
        className="h-screen flex flex-col overflow-hidden">
        <div className='flex w-full justify-between'>
          <motion.div className='block w-44 h-44 bg-red ml-32 mt-20 self-center'
            initial={{ opacity: 0, }}
            whileInView={{
              opacity: 1,
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              type: "bounce",
              // delay: 0.5,
              duration: 3.0
            }}
          >

          </motion.div>

          <motion.div className='w-3/5 h-32 bg-yellow-400 rounded-l-2xl -mr-5 flex justify-center items-center'
            initial={{ rotate: 0 }}
            whileInView={{
              // opacity: 1,
              rotate: -5
            }}
            transition={{
              delay: 0.5,
              duration: 0.5
            }}
          >
            <motion.p className='text-white text-3xl font-bold'
              initial={{ translateX: 300 }}
              whileInView={{
                translateX: 0
              }}
              transition={{
                delay: 1.0,
                duration: 0.5
              }}>
              About Us
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
