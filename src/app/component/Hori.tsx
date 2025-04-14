"use client"

import React from "react";
import Marquee from "./Marquee";


export default function Hori() {
  return (
    <div className="text-white w-[600px]">
      <div className="justify-center items-center space-x-4">
        <div className="">
          <Marquee from="0" to="-100%"/>
        </div>
      </div>
    </div>
  );
}
