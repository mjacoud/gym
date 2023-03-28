import { SelectedPage } from "@/util/enums";
import { buttonProps } from "@/util/types";

import AnchorLink from "react-anchor-link-smooth-scroll";

export const ActionButton = ({ children, setSelectedPage }: buttonProps) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};
