import { classesCardType } from "@/util/types";
import { motion } from "framer-motion";

export const ClassCard = ({ image, name, description }: classesCardType) => {
  const overlayStyle = ` absolute z-30 flex h-[380px] w-[450px] flex-col justify-center items-center whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline h-[380px] w-[450px]">
      <div className={overlayStyle}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img
        src={image}
        alt={`${image}`}
        className="pointer-events-none h-full min-w-[450px] p-4"
      />
    </li>
  );
};
