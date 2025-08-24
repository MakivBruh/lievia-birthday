import "./App.css";
import HeroSection from "./components/HeroSection";
import Profile from "./components/Profile";
import Countdown from "./components/Countdown";
import Event from "./components/Event";
import Music from "./components/Music";
import IntroCard from "./components/Card";
import ClosingSection from "./components/ClosingSection";



// ---------- Main Source ----------

export default function App() {
  return (
    <>
    <IntroCard />
    <HeroSection />
    <Profile />
    <Countdown />
    <Event />
    <ClosingSection />
    <Music />
    </>
  );
}
