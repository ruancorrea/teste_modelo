import React from "react"
import dynamic from 'next/dynamic'
import Header from "@/components/Header";
import Section from "@/components/Section";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

const ScrollTop = dynamic(() => import("@/components/ScrollTop"), {
    ssr: false,
  });

export default function Home(){
    return (
        <div>
            <ScrollTop />
            <Navbar />
            <div className={`md:px-16 text-white pt-10 pb-4 px-6`}>
                <Header />
                <Section />
            </div>
            
        </div>
    )
}