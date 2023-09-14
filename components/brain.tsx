import React from "react";
import Image from "next/image";
import B from "@/public/images/brain.webp";

const Brain = () => {
  return (
    <div className="w-11/12 py-10 flex items-center justify-center mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="bg-rose-600"></div>
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
    </div>
  );
};

export default Brain;
