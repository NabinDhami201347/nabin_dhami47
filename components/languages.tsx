import Image from "next/image";
import { Button } from "./ui/button";

const Languages = () => {
  const languages = ["pop", "oop", "dotnet", "java", "javascript", "typescript", "go", "python"];

  return (
    <section className="py-4 bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.03)] border-t border-b border-grayBorder">
      <div className="w-11/12 mx-auto">
        <ul className="flex items-center justify-center gap-10 flex-wrap py-6">
          {languages.map((language) => (
            <Button variant={"outline"} key={language} className="h-16 w-16 aspect-square rounded-lg p-3">
              <Image width={60} height={60} src={`/icons/${language}.svg`} alt={language} />
            </Button>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Languages;
