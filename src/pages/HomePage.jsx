import Hero from "../components/HeroSec/Hero";
import AbsLine from "../components/HomePage/AbsLine";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <div className="container mx-auto px-4 flex flex-col items-center">
          <AbsLine />
        </div>
      </div>
    </>
  );
}
