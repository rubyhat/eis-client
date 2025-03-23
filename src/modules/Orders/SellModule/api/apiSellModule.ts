import { axiosBaseWrap } from "../../../../axiosConfig";

export const apiSellModule = {
  create(order: FormData) {
    return axiosBaseWrap
      .post("/orders/sell", order, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};
