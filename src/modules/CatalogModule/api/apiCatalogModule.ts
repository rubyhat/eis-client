import { axiosBaseWrap } from "../../../axiosConfig";
import { DisplayEstateObject } from "../store";

export const apiCatalogModule = {
  fetchCatalog(params: string): Promise<DisplayEstateObject[]> {
    return axiosBaseWrap
      .get(`/catalog?${params}`)
      .then((response) => {
        if (response.status >= 500) throw new Error("Ошибка сервера!");
        return response.data.data;
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log("fetchCatalogError", error);
        throw error;
      });
  },
};
