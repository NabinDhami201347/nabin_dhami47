import Image from "next/image";
import Computer from "@/public/images/computers.webp";

const Hero = () => {
  return (
    <div className="w-11/12 flex items-center justify-center bg-black mx-auto">
      <Image
        height={500}
        src={Computer}
        loading="lazy"
        placeholder="blur"
        style={{ objectFit: "cover" }}
        alt="Image"
        className="rounded-md"
      />
    </div>
  );
};

export default Hero;
