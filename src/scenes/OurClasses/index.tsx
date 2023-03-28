import { classesCardType, navProps } from "@/util/types";
import image1 from "@/Assets/image1.png";
import image2 from "@/Assets/image2.png";
import image3 from "@/Assets/image3.png";
import image4 from "@/Assets/image4.png";
import image5 from "@/Assets/image5.png";
import image6 from "@/Assets/image6.png";
import { motion } from "framer-motion";
import { SelectedPage } from "@/util/enums";
import { Htext } from "@/components/Htext";
import { Carrossel } from "@/components/Carrossel";

const images = [image1, image2, image3, image4, image5, image6];

const classes: Array<classesCardType> = [
  {
    name: "Weight Training Classes",
    description:
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    image: image2,
  },
  {
    name: "Ad Core Classes",
    description:
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    image: image6,
  },
];
export const OurClasses = ({ setSelectedPage }: navProps) => {
  return (
    <section
      id="ourclasses"
      className="w-full bg-primary-100 py-40
  "
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext>OUR CLASSES</Htext>
            <p className="py-5 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              animi distinctio unde libero sit ducimus? Vero ratione doloremque
              molestiae repudiandae modi quidem a non alias. Impedit sapiente
              tempora atque ad.
            </p>
          </div>
        </motion.div>
        <Carrossel classes={classes} />
      </motion.div>
    </section>
  );
};
