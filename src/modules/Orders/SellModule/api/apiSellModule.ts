import { axiosBaseWrap } from "../../../../axiosConfig";

export const apiSellModule = {
  create(order: FormData) {
    return axiosBaseWrap.post("/orders/sell", order);
  },
};
