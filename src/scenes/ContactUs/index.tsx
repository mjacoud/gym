import { navProps } from "@/util/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import contactUsPageGraphic from "@/assets/contactUsPageGraphic.png";
import { SelectedPage } from "@/util/enums";
import { Htext } from "@/components/Htext";

export const ContactUs = ({ setSelectedPage }: navProps) => {
  const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mt-5`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto flex w-5/6 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>
            <span className="text-primary-500">JOIN NOW</span>
            <p className="my-5 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              fuga, eos porro explicabo vitae culpa tempora quibusdam id.
              Corporis quibusdam nemo voluptas, id minus necessitatibus! Quae ab
              magnam ut incidunt.
            </p>
          </Htext>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 w-full justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/el/panavu"
              className="py-8"
            >
              <input
                type="text"
                className={inputStyles}
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is Required"}
                  {errors.name.type === "maxLength" &&
                    "Max Length is 100 characters"}
                </p>
              )}
              <input
                type="text"
                className={inputStyles}
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is Required"}
                  {errors.email.type === "pattern" && "Invalid Email Adress"}
                </p>
              )}
              <textarea
                rows={4}
                cols={50}
                className={inputStyles}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is Required"}
                  {errors.message.type === "maxLength" &&
                    "Max Length is 2000 characters"}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 duration-500 hover:text-white"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
      <div className="w-[30%]">
        <motion.div
          className="relative mt-16 basis-2/5 sm:hidden md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
            <img
              src={contactUsPageGraphic}
              alt="contact-us-page-graphic"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
