import { shrtcode } from "../api/shrtcodeApi";

//TODO:return type Promise
export const getLinkShorter = async( url:string ) => {
  try {
    const resp = await shrtcode.get(`/shorten?url=${url}`);
    const linkData = resp.data;

    if (linkData.ok) {
      return linkData.result;
    } else {
      return {};
    }

  } catch (error) {
    return {};
  }
}