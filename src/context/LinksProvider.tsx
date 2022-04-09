import { useReducer } from "react";
import { linkData, linkState } from "../interfaces/interfaces";
import { LinksContext } from "./LinksContext";
import { linksReducer } from "./linksReducer";

interface props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: linkState = {
  links: [],
};

export const LinksProvider = ({ children }: props) => {
  const [listLinks, dispatch] = useReducer(linksReducer, INITIAL_STATE);

  const addLink = (links: linkData) => {
    dispatch({ type: "addLink", payload: links });
  };

  return (
    <LinksContext.Provider value={{ listLinks, addLink }}>
      {children}
    </LinksContext.Provider>
  );
};