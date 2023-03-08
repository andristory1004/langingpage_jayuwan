import '../app/globals.css'

export default function Product() {
    return (
        <>
            <div className="flex flex-col justify-center">
                <div id="detail-product" className="h-screen w-full overflow-auto ">
                    <div
                        className="h-14 w-full absolute z-10 top-0 text-3xl bg-blue-400 px-3 py-2 flex justify-between text-white items-center font-semibold">
                        <button className="hover:scale-105">
                            <i className="fas fa-angle-left"></i>
                        </button>
                        <p className="text-xl">Detail Produk</p>
                        <div></div>
                    </div>
                    <div className="pt-14">
                        <section>
                            <div className="h-52 w-full bg-red-500">
                            </div>
                            <div className="w-full space-x-2 py-1 flex overflow-auto">
                                <div className="h-16 w-16 bg-black">
                                </div>
                                <div className="h-16 w-16 bg-black">
                                </div>
                                <div className="h-16 w-16 bg-black">
                                </div>
                            </div>

                            <div className="px-3 py-2">
                                <p className="font-bold text-xl">Cover Keyless Jayuwan</p>
                                <p>
                                    <span className="line-through">Rp. 5.000</span>
                                    <span className="font-bold text-xl">Rp. 5.000</span>
                                </p>
                                <div className="text-sm text-yellow-500 flex justify-between mt-5">
                                    <p>

                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>

                                    </p>
                                    <p className="text-black font-bold">
                                        <span className="text-xl">0</span>
                                        <span>Terjual</span>
                                    </p>
                                    <div className="flex space-x-3 text-xl">
                                        <button id="btn-favorite">
                                            <i id="icon-favorite" className="fa-regular fa-heart"></i>
                                        </button>
                                        <button id="btn-share">
                                            <i className="fas fa-share"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex space-x-3 items-center shadow-md">
                                        <button className="font-bold text-blue-500 py-3 border-b-2 border-blue-600">
                                            Deskripsi
                                        </button>
                                        <p>|</p>
                                        <button className="font-bold py-3">
                                            Informasi Tambahan
                                        </button>
                                    </div>
                                    <p className="text-sm py-2">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, fuga? Atque tenetur
                                        iure maiores fugit voluptatibus itaque maxime exercitationem, nisi culpa, totam eos iste
                                        expedita doloremque ab cumque eveniet minima?
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>


                    <div className="h-14 w-full absolute z-10 bottom-0 flex text-white font-semibold text-2xl">
                        <div
                            className="w-2/5 text-center bg-green-400 h-full items-center flex justify-center hover:bg-green-600 transition-colors">
                            <button className="">
                                <i className="fas fa-cart-shopping"></i>
                            </button>
                        </div>
                        <div
                            className="w-3/5 text-center bg-blue-400 h-full items-center flex justify-center hover:bg-blue-600 transition-colors">
                            <button id="btn-modal" className="flex items-center">
                                <i className="fas fa-money-bill-1-wave"></i>
                                <span className="ml-3 text-base">Beli Sekarang</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}