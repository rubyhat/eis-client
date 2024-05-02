import { axiosBaseWrap } from "../../../axiosConfig";
import { DisplayEstateObject } from "../../CatalogModule/store";

export const apiEstateDetailsModule = {
  getDetailsById(id: string): Promise<DisplayEstateObject> {
    return axiosBaseWrap
      .get(`/catalog/${id}`)
      .then((response) => {
        if (response.status >= 500) throw new Error("Ошибка сервера!");
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },
  fetchSimilars(params: string): Promise<DisplayEstateObject[]> {
    return axiosBaseWrap
      .get(`/catalog?${params}`)
      .then((response) => {
        if (response.status >= 500) throw new Error("Ошибка сервера!");
        return response.data.data;
      })
      .catch((error) => {
        throw error;
      });
  },
};
