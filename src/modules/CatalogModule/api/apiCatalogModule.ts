import { axiosBaseWrap } from "../../../axiosConfig";
import { ObjectItem } from "../store";

export const apiCatalogModule = {
  fetchCatalog(params: string): Promise<ObjectItem[]> {
    return axiosBaseWrap
      .get(`/catalog?${params}`)
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
