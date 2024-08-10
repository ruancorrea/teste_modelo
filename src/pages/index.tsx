import React from "react"
import dynamic from 'next/dynamic'
import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

const ScrollTop = dynamic(() => import("@/components/ScrollTop"), {
    ssr: false,
  });

export default function Home(){
    return (
        <div className="bg-slate-50 text-black">
            <ScrollTop />
            <Navbar />
            <div className={`mt-12`}>
                <Header />
                <Section />
            </div>
            <Footer />
        </div>
    )
}