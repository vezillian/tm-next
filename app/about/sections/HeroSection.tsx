import React from 'react'

const HeroSection = () => {
    return (
        <section className="hero-area pt-40 pb-0">
            <div className="bg-[#0C1433] text-white py-0">
                <div className="relative overflow-hidden">
                    <div className="container mx-auto">
                        <div className="flex justify-center">
                            <div className="w-full max-w-2xl text-center">
                                <h1 className="text-4xl font-bold">About Us</h1>
                                <ul className="flex justify-center space-x-4 mt-4">
                                    {/* <li><a href="index.html" className="text-white">Home</a></li> */}
                                    {/* <li className="font-bold text-white">About Us</li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection