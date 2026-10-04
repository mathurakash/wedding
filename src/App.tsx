import { useEffect } from "react";
import { wedding } from "./data/wedding";
import { useReveal } from "./hooks/useReveal";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GaneshBlessing from "./components/GaneshBlessing";
import Couple from "./components/Couple";
import Countdown from "./components/Countdown";
import Rituals from "./components/Rituals";
import Events from "./components/Events";
import CeremonyHighlight from "./components/CeremonyHighlight";
import LoveStory from "./components/LoveStory";
import Gallery from "./components/Gallery";
import Families from "./components/Families";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";

export default function App() {
  useReveal();
  useEffect(() => {
    document.title = `${wedding.groom.name} & ${wedding.bride.name} | Wedding Invitation, ${wedding.dateLabel} ${wedding.year}`;
  }, []);
  return (
    <>
      <Intro />
      <a href="#story" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-gold focus:px-3 focus:py-1">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <GaneshBlessing />
        <Couple />
        <Countdown />
        <Rituals />
        <LoveStory />
        <Events />
        <CeremonyHighlight />
        <Gallery />
        <Families />
        <Venue />
        {wedding.showRsvp && <RSVP />}
      </main>
      <Footer />
      <MusicPlayer />
    </>
  );
}
