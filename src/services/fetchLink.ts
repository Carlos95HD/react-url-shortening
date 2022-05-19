import Swal from "sweetalert2";
import { shrtcode } from "../api/shrtcodeApi";

export const getLinkShorter = async( url:string ) => {
    return await shrtcode.get(`/shorten?url=${url}`)
    .then(resp => {
      const { ok, result  } = resp.data;
      if (ok) {
        return result;
      } else {
        Swal.fire({
          title:'Alert',
          text:'There was a problem in the request, try again',
          icon:"info",
        });
      }
    })
    .catch(function (error) {
      if (error.response) {
        Swal.fire({
          title:'Error',
          text:'Please, insert a link valid',
          icon:"error",
        });
        return {};
      } else if (error.request) {
        Swal.fire({
          title:'Error to request',
          text:'Error to request data... verify your connection to internet, or contact at admin.',
          icon:"error",
        });
        return {};
      }
    });
}