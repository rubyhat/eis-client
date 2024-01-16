import { AxiosPromise } from "axios";
import { axiosBaseWrap } from "../../../axiosConfig";

export const apiCatalogModule = {
  fetchCatalog(): AxiosPromise {
    return axiosBaseWrap
      .get(`/catalog`)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
