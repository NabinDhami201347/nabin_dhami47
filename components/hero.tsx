import Image from "next/image";
import Computer from "@/public/images/computers.webp";

const Hero = () => {
  return (
    <div className="w-11/12 py-10 flex items-center justify-center mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <Image
          height={500}
          src={Computer}
          loading="lazy"
          placeholder="blur"
          style={{ objectFit: "cover" }}
          alt="Image"
          className="rounded-md"
        />
        <div className="bg-slate-400"></div>
      </div>
    </div>
  );
};

export default Hero;
