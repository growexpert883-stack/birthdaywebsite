"use client";

import { useState } from "react";

import Countdown from "@/components/Countdown";
import Password from "@/components/Password";
import Welcome from "@/components/Welcome";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import LoveLetter from "@/components/LoveLetter";
import MusicPlayer from "@/components/MusicPlayer";
import Cake from "@/components/Cake";
import FinalSurprise from "@/components/FinalSurprise";
import FloatingHearts from "@/components/FloatingHearts";
import PageLoader from "@/components/PageLoader";




export default function Home() {

  const [stage, setStage] = useState<
    "countdown" | "password" | "content"
  >("countdown");


  if (stage === "countdown") {
    return (
      <Countdown
        finished={() => setStage("password")}
      />
    );
  }


  if (stage === "password") {
    return (
      <Password
        unlock={() => setStage("content")}
      />
    );
  }


  return (
    <>


    <PageLoader />

    <FloatingHearts />


    <MusicPlayer />


      <Welcome />
      <Hero />
      <Timeline />
      <Gallery />
      <LoveLetter />
      <Cake />
      <FinalSurprise />
      {/* 
        Yahan baad mein add karenge:
        Timeline
        Gallery
        Love Letter
        Surprise Ending
      */}
    </>
  );
}