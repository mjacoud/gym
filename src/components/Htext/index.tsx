import { HtextProps } from "@/util/types";

export const Htext = ({ children }: HtextProps) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
  );
};
