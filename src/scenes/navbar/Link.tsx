import { SelectedPage } from "@/util/enums";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { linkProps } from "../../util/types";

export const Link = ({ page, selectedPage, setSelectedPage }: linkProps) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
};
