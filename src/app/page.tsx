"use client"
import Image from "next/image";
import LandingPage from "./component/landingPage";
import ContactPage from "./component/ContactPage";

export default function Home() {
  return (
    <div className=" w-full h-screen">
      <LandingPage/>    
      <div className="w-full h-full">
        <ContactPage/>
      </div>
      <div>
        
      </div>
    </div>
  );
}
