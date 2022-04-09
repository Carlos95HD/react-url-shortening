import { getLinkShorter } from "../../services/fetchLink";

export const getLinkData = async( url:string ) => {
  const resp = await getLinkShorter(url);

  if (resp.code) {
    const { code ,short_link, original_link } = resp;
    return {
      code,
      shortLink: short_link,
      originalLink: original_link 
    }
  } else {
    return {
      code:'',
      shortLink: '',
      originalLink: '' 
    };
  }
}
