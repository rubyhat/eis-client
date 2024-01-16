import { axiosBaseWrap } from "../../../axiosConfig";
import { ObjectItem } from "../store";

export const apiCatalogModule = {
  fetchCatalog(): Promise<ObjectItem[]> {
    return axiosBaseWrap
      .get(`/catalog`)
      .then((response) => {
        console.log(response);
        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  },
};
