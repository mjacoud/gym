import { SelectedPage } from "./enums";

export type linkProps = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export type pageProps = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export type buttonProps = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

export type navProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

export type HtextProps = {
  children: React.ReactNode;
};

export interface benefitCardType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export type benefitCardProp = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

export type classesCardType = {
  name: string;
  description: string;
  image: string;
};

export type carrosselProps = {
  classes: Array<classesCardType>;
};
