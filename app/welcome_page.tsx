"use client"
import { motion, useTransform } from "framer-motion"

import Link from "next/link"
import Navbar from "./navbar"
import Image from "next/image"
import asset1 from '../public/images/Asset 1.png'

export default function WelcomePage() {
    return (
        <>
            <div
                className="overflow-hidden flex flex-col bg-blue-500 justify-center h-screen before:block before:bg-white before:w-768px before:h-768px before:rounded-full before:scale-125 before:-ml-32 after:block after:bg-blue-500 after:opacity-10 after:w-56 after:h-56 after:absolute after:rounded-full after:top-0 after:-mt-36 after:-ml-10 after:scale-150">
                <Navbar></Navbar>
                <div className="flex absolute px-20 pt-24 z-10 w-full">
                    <motion.div
                        className=" w-1/2 font-Raleway pr-20"

                    >
                        <motion.p
                            className="text-5xl font-bold"

                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{
                                delay: 0,
                                duration: 0.5
                            }}

                        >
                            ENJOY ONLINE
                        </motion.p>
                        <motion.p
                            className="text-5xl "
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{
                                delay: 0.5,
                                duration: 0.5
                            }}
                        >
                            SHOPPING
                        </motion.p>
                        <motion.p
                            className="mt-5"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    delay: 1.0,
                                    duration: 0.5,
                                    staggerChildren: 0.08
                                }
                            }}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste voluptatem eligendi aliquid consequuntur expedita corrupti ratione hic at, doloribus fugiat. Ipsa dolore laborum necessitatibus, sint praesentium ducimus veritatis sapiente?
                        </motion.p>

                        <div className="flex space-x-3 mt-16">
                            <motion.button
                                className="bg-blue-500 w-28 h-10 hover:bg-blue-800 transition-all duration-300 rounded-md text-white font-semibold"
                                initial={{ opacity: 0, rotate: 180 }}
                                animate={{ opacity: 1, rotate: 0, transition: { delay: 1.5, duration: 0.5 } }}
                            >
                                Shopp Now
                            </motion.button>

                            <motion.button
                                className="w-28 h-10 transition-all duration-300 rounded-md text-blue-500 font-semibold border-2 border-blue-500 hover:border-blue-800 hover:text-blue-800"
                                initial={{ opacity: 0, rotate: -180 }}
                                animate={{ opacity: 1, rotate: 0, transition: { delay: 1.5, duration: 0.5 } }}>
                                Read More
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="-mt-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 1.0,
                            duration: 0.5
                        }}
                    >
                        <div className="flex flex-col justify-center items-center">
                            <Image src={asset1} alt="" className=" h-96px w-768px scale-75 object-contain relative z-10"></Image>
                            <div className="static w-72 h-16 bg-black rounded-full blur-2xl -mt-20  z-10"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.div id='shop' className='h-screen'>

            </motion.div>
            <motion.div id='service' className='h-screen bg-red'>

            </motion.div>
            <motion.div id='about' className='h-screen bg-yellow-300'>

            </motion.div>
            <motion.div id='contact' className='h-screen bg-green-300'>
                <Link href="/" scroll={false}>fsfdsf</Link>
            </motion.div>
        </>
    )
}