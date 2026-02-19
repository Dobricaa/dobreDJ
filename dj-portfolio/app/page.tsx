import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"), { ssr: true });
const LatestMix = dynamic(() => import("@/components/LatestMix"), {
  ssr: true,
});
const UpcomingEvents = dynamic(() => import("@/components/UpcomingEvents"), {
  ssr: true,
});
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <LatestMix />
      <UpcomingEvents />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
