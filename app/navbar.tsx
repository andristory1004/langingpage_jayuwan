import Link from "next/link"
import Image from "next/image"
import logo from '../public/images/Stige Leatehr Yellow.png'


export default function Navbar() {
    return (
        <>
            <div className="w-full px-10 absolute top-5 z-30 font-Raleway">
                <div className="w-full h-20 flex justify-between items-center text-white">
                    <div className="text-blue-500 ">
                        <Link href="" className="flex items-center">
                            <Image src={logo} alt="" className="w-24 h-24 object-contain"></Image>
                            <p className="text-2xl text-yellow-500 font-semibold">Stige Leather</p>
                        </Link>
                    </div>
                    <div className="space-x-8 text-lg font-semibold flex items-center">
                        <Link href="/" className="hover:scale-110 transition-all">Home</Link>
                        <Link href="#shop" scroll={false} className="hover:scale-110 transition-all">Shop</Link>
                        <Link href="#service" className="hover:scale-110 transition-all">Service</Link>
                        <Link href="#about" scroll={false} className="hover:scale-110 transition-all">About</Link>
                        <Link href="#contact" scroll={false} className="hover:scale-110 transition-all">Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}