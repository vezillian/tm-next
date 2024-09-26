import React from 'react'

const HeroSection = () => {
    return (
        <section className="hero-area pt-40 pb-20">
            <div className="bg-blue-900 text-white py-20">
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="shape shape-one scene"><span data-depth="2"></span></div>
                        <div className="shape shape-two scene"><span data-depth="3"></span></div>
                        <div className="shape shape-three scene"><span data-depth="4"></span></div>
                        <div className="shape shape-four scene"><span data-depth=".1"></span></div>
                    </div>
                    <div className="container mx-auto">
                        <div className="flex justify-center">
                            <div className="w-full max-w-2xl text-center">
                                <h1 className="text-4xl font-bold">About Us</h1>
                                <ul className="flex justify-center space-x-4 mt-4">
                                    <li><a href="index.html" className="text-white">Home</a></li>
                                    <li className="font-bold text-white">About Us</li>
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