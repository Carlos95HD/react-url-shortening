import { shrtcode } from "../api/shrtcodeApi";

export const getLinkShorter = async( url:string ) => {
    return await shrtcode.get(`/shorten?url=${url}`)
    .then(resp => {
      const { ok, result  } = resp.data;
      if (ok) {
        return result;
      }
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      }
    });
}