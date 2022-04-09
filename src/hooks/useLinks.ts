import { useContext } from "react"
import { LinksContext } from "../context/LinksContext"

export const useLinks = () => {
  const { listLinks, addLink } = useContext(LinksContext);

  const {links} = listLinks;

  return {
    links: links,
    addLink
  }
}
