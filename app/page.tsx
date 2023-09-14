import Brain from "@/components/brain";
import Hero from "@/components/hero";
import Languages from "@/components/languages";
import Skills from "@/components/skills";
import { Timeline, Internship } from "@/components/timeline";

import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="mt-20 mx-auto">
      <Hero />
      <Skills />
      <Brain />
      <Languages />

      <div className="grid md:grid-cols-2 w-11/12 my-10 gap-10 mx-auto">
        <Timeline />
        <Internship />
      </div>
      <Separator />
    </main>
  );
}
