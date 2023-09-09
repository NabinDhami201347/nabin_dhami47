import React from "react";
import Image from "next/image";
import B from "@/public/images/brain.webp";

const Brain = () => {
  return (
    <div className="w-11/12 flex items-center justify-center bg-black mx-auto">
      <Image
        height={500}
        src={B}
        loading="lazy"
        placeholder="blur"
        style={{ objectFit: "cover" }}
        alt="Image"
        className="rounded-md"
      />
    </div>
  );
};

export default Brain;
