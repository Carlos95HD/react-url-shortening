import { createContext } from "react";
import { linkData, linkState } from "../interfaces/interfaces";

export type LinksListContext = {
  listLinks: linkState;
  addLink: ( links: linkData ) => void;
}

export const LinksContext = createContext<LinksListContext>({} as LinksListContext);