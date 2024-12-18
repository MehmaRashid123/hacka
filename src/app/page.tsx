"use client"; 


import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero, { Hero1, Hero2, Hero3, Hero4, Hero5} from "@/components/Hero";
import SlidingCart from "@/components/Slidingcart";

export default function Home() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };

    return (
        <div className="relative">
          
            <Header />

            
            <Hero />
            <Hero1 />
            <Hero2 />
            <Hero3 />
            <Hero4/>
            <Hero5/>
        
            
            <Footer />

            <button
                onClick={toggleCart}
                className="fixed bottom-6 right-6 bg-yellow-500 text-white rounded-full p-4 shadow-lg hover:bg-yellow-600 transition-colors duration-200"
            >
                🛒
            </button>

        
            <SlidingCart isOpen={isCartOpen} toggleCart={toggleCart} />
        </div>
    );
}
