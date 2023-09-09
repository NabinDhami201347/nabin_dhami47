import Brain from "@/components/brain";
import Hero from "@/components/hero";
import Languages from "@/components/languages";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="my-16 mx-auto">
      <Hero />
      <Skills />
      <Brain />
      <Languages />
    </main>
  );
}
