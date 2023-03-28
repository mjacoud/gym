import { SelectedPage } from "@/util/enums";
import { ActionButton } from "@/components/ActionButton";
import HomePageText from "@/Assets/HomePageText.png";
import HomePageGraphic from "@/Assets/HomePageGraphic.png";
import SponsorRedBull from "@/Assets/SponsorRedBull.png";
import SponsorForbes from "@/Assets/SponsorForbes.png";
import SponsorFortune from "@/Assets/SponsorFortune.png";
import useMediaQuery from "@/hooks/useMediaQueries";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { navProps } from "@/util/types";

export const Home = ({ setSelectedPage }: navProps) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="md:-mt-20"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              debitis ab consequuntur nobis, non ratione molestias cumque sint
              alias quo? Molestiae neque architecto nam facilis deserunt?
              Laboriosam eligendi rem dolorem.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8 md:justify-start"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500
            "
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:flex md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6 ">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="RedBull-Sponsor" />
              <img src={SponsorForbes} alt="Forbes-Sponsor" />
              <img src={SponsorFortune} alt="Fortune-Sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
