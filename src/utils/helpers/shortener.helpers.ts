import { linkData } from "../../interfaces/interfaces";
import { getLinkShorter } from "../../services/fetchLink";

export const getLinkData = async (url: string) => {
  const resp = await getLinkShorter(url);

  if (resp.code) {
    const { code, full_short_link, original_link } = resp;
    return {
      code,
      fullShortLink: full_short_link,
      originalLink: original_link,
    };
  } else {
    return {
      code: "",
      fullShortLink: "",
      originalLink: "",
      error: true
    };
  }
};

export const verifyDuplicated = (newData: linkData, listLinks: linkData[]) => {
  let result = false;
  if (newData.code !== "" && listLinks.length > 0) {
    listLinks.forEach((link) => {
      if (newData.code === link.code) {
        result = true;
      }
    });
    return result;
  }

  return result;
};
