import Link from "next/link"
import Image from "next/image"
import logo from '../public/images/logo-jayuwan-blue.png'


export default function Navbar() {
    return (
        <>
            <div className="w-full px-10 absolute top-5 z-30">
                <div className="w-full h-20 flex justify-between items-center text-white">
                    <div className="text-blue-500 ">
                        <Link href="">
                            <Image src={logo} alt="" className="w-40 h-40 object-contain"></Image>
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