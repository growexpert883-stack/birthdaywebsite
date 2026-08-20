"use client";

import { useEffect, useState } from "react";

import Countdown from "@/components/Countdown";
import Password from "@/components/Password";
import Welcome from "@/components/Welcome";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import Cake from "@/components/Cake";
import FinalSurprise from "@/components/FinalSurprise";
import FloatingHearts from "@/components/FloatingHearts";
import LoveLetter from "@/components/LoveLetter";
import OurChat from "@/components/OurChat";
import PageLoader from "@/components/PageLoader";
import Reasons from "@/components/Reasons";
import MemoryTickets from "@/components/MemoryTickets";
import ThingsIRemember from "@/components/ThingsIRemember";
import Heartbeat from "@/components/Heartbeat";
import ChooseOne from "@/components/ChooseOne";
import MemorySky from "@/components/MemorySky";
import DigitalGift from "@/components/DigitalGift";
import CrazyThings from "@/components/CrazyThings";
import IfYouWereHere from "@/components/IfYouWereHere";

export default function Home() {
  const [stage, setStage] = useState<
    "countdown" | "password" | "content"
  >("countdown");

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

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

      <main>
        <Welcome />

        <Hero />

        <Timeline />

        <Gallery />

        <Reasons />

        <OurChat />

        <CrazyThings />

        <MemoryTickets />

        <ThingsIRemember />

        <Heartbeat />

        <IfYouWereHere />

        <ChooseOne />

        <MemorySky />

        <LoveLetter />

        <DigitalGift />

        <Cake />

        <FinalSurprise />
      </main>
    </>
  );
}