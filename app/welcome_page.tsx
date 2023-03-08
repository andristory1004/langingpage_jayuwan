"use client"
import { motion, useTransform } from "framer-motion"

import Link from "next/link"
import Navbar from "./navbar"
import Image from "next/image"
import asset1 from '../public/images/Asset 1.png'
import mockup from '../public/images/mockup.png'
import card from '../public/images/card.png'
import struk from '../public/images/srtruk.png'

export default function WelcomePage() {
    return (
        <>
            <div
                className="overflow-hidden flex flex-col bg-yellow-400 justify-center h-screen before:block before:bg-white before:w-768px before:h-768px before:rounded-full before:scale-125 before:-ml-32 after:block after:bg-yellow-400 after:opacity-10 after:w-56 after:h-56 after:absolute after:rounded-full after:top-0 after:-mt-36 after:-ml-10 after:scale-150">
                <Navbar></Navbar>
                <div className="flex absolute px-20 pt-24 z-10 w-full">
                    <motion.div
                        className=" w-1/2 font-Raleway pr-20">
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
                                    duration: 1.5,
                                    staggerChildren: 0.08
                                }
                            }}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste voluptatem eligendi aliquid consequuntur expedita corrupti ratione hic at, doloribus fugiat. Ipsa dolore laborum necessitatibus, sint praesentium ducimus veritatis sapiente?
                        </motion.p>

                        <div className="flex space-x-3 mt-16">
                            <motion.button
                                className="bg-yellow-400 w-28 h-10 hover:bg-yellow-500 transition-all duration-300 rounded-md text-white font-semibold"
                                initial={{ opacity: 0, rotate: 180 }}
                                animate={{ opacity: 1, rotate: 0, transition: { delay: 1.5, duration: 0.5 } }}
                            >
                                Shopp Now
                            </motion.button>

                            <motion.button
                                className="w-28 h-10 transition-all duration-300 rounded-md text-yellow-400 font-semibold border-2 border-yellow-400 hover:border-yellow-500 hover:text-yellow-500"
                                initial={{ opacity: 0, rotate: -180 }}
                                animate={{ opacity: 1, rotate: 0, transition: { delay: 1.5, duration: 0.5 } }}>
                                Read More
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-1/2 flex flex-col justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 1.0,
                            duration: 0.5
                        }}
                    >

                        <div className="flex justify-center items-end relative z-20">
                            <motion.div
                                className="-mr-10 order-1"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 2.0,
                                    duration: 1.0
                                }}
                            >
                                <Image src={card} alt="" className=" object-contain "></Image>
                            </motion.div>
                            <motion.div
                                className="-ml-10 order-3"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 2.0,
                                    duration: 1.0
                                }}
                            >
                                <Image src={struk} alt="" className=" object-contain "></Image>
                            </motion.div>
                            <div className="-mt-16 order-2">
                                <Image src={mockup} alt="" className=" object-contain relative"></Image>
                            </div>
                        </div>
                        <div className="static w-72 h-16 bg-black rounded-full blur-3xl -mt-16 "></div>

                    </motion.div>
                </div>
            </div>
        </>
    )
}