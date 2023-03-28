import { carrosselProps, classesCardType } from "@/util/types";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ClassCard } from "../ClassCard";

export const Carrossel = ({ classes }: carrosselProps) => {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
    console.log(width);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="ml-[5.25rem] cursor-grab overflow-hidden md:ml-[7.5rem]"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="flex"
        drag={"x"}
        dragConstraints={{ right: 0, left: -width }}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
      >
        {classes.map((item: classesCardType, index: number) => (
          <ClassCard
            name={item.name}
            description={item.description}
            image={item.image}
            key={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};
