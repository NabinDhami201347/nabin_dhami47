import { FC } from "react";
import { Button } from "@/components/ui/button";

interface IconProps {
  icon: any;
}

const Icon: FC<IconProps> = ({ icon: Icon }) => {
  return (
    <Button variant="outline" size="icon" className="text-zinc-600 dark:text-zinc-400 ">
      <Icon />
    </Button>
  );
};

export default Icon;
