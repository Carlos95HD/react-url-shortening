import Swal from "sweetalert2";
import { shrtcode } from "../api/shrtcodeApi";

export const getLinkShorter = async( url:string ) => {
    return await shrtcode.get(`/shorten?url=${url}`)
    .then(resp => {
      console.log(resp)
      const { ok, result  } = resp.data;
      if (ok) {
        return result;
      } else {
        Swal.fire({
          title:'Alert',
          text:'there was a problem in the request, try again',
          icon:"info",
        });
        return {};
      }
    })
    .catch(function (error) {
      if (error.response) {
        Swal.fire({
          title:'Error',
          text:'contact the developer',
          icon:"error",
        });
        return {};
      } else if (error.request) {
        Swal.fire({
          title:'Server Error',
          text:'contact the developer',
          icon:"error",
        });
        return {};
      }
    });
}