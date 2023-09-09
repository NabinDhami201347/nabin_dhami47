"use client";

import { usePathname } from "next/navigation";
import Typewriter from "typewriter-effect";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import Icon from "@/components/shared/icon";
import { Github } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  const path = usePathname();

  return (
    <header className="w-full fixed top-0 right-0 z-10 backdrop-blur-sm">
      <div className="w-11/12 mx-auto flex items-center justify-between py-2">
        <Link href="/">
          <Button variant={"link"}>
            <Typewriter
              options={{
                strings: [`~${path}`],
                autoStart: true,
                loop: true,
              }}
            />
          </Button>
        </Link>
        <div className="flex items-center gap-4">
          <Icon icon={Github} />
          <ThemeToggle />
        </div>
      </div>
      <Separator />
    </header>
  );
};

export default Navigation;
