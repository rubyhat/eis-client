import toast from "react-hot-toast";

import { useAxiosMutation } from "../../../../configs/useAxiosMutation";
import { apiSellModule } from "../api";
import { useSellModuleStore } from "../store";

interface CreateSellOrderMutationFnProps {
  data: FormData;
}
export const useCreateSellOrderMutation = () => {
  const clearLocalStorage = () => {
    // Очистка данных после успешной отправки
    localStorage.removeItem("sellFormData");
    localStorage.removeItem("serviceTypes");
    localStorage.removeItem("estateTypes");
    localStorage.removeItem("cityTypes");
    localStorage.removeItem("roomTypes");
  };
  const setStep = useSellModuleStore((state) => state.setStep);
  return useAxiosMutation({
    /**
     * Функция запроса на сервер для создания заявки на продажу.
     * @param {CreateSellOrderMutationFnProps} params Данные для создания заявки.
     * @returns {Promise<any>} Промис с ответом сервера.
     */
    mutationFn: ({ data }: CreateSellOrderMutationFnProps) =>
      apiSellModule.create(data),
    onSuccess: () => {
      toast.success("Заявка создана!");
      setStep(9);
      clearLocalStorage(); // очищать форму после успешной отправки
    },

    onError: (error) => {
      toast.error("Произошла ошибка!");
      console.log(error);
    },
  });
};
