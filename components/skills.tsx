import Image from "next/image";
import { Button } from "@/components/ui/button";

const Skills = () => {
  const icons = ["tailwindcss", "react", "svelte", "nextjs", "nodejs", "nestjs", "mongodb", "mysql", "firebase"];

  return (
    <section className="py-4 my-4 bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.03)] border-t border-b">
      <div className="w-11/12 mx-auto">
        <ul className="flex items-center justify-center gap-10 flex-wrap py-6">
          {icons.map((icon) => (
            <Button variant="outline" key={icon} className="h-16 w-16 aspect-square rounded-lg p-3">
              <Image width={60} height={60} src={`/icons/${icon}.svg`} alt={icon} />
            </Button>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
