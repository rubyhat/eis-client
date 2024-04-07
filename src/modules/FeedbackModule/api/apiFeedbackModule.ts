import { axiosBaseWrap } from "../../../axiosConfig";

interface FeedbackOrder {
  name: string;
  phone: string;
  estateId?: string;
}

export const apiFeedbackModule = {
  create(feedback: FeedbackOrder) {
    return axiosBaseWrap
      .post("/orders/feedback", feedback)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  },
};
