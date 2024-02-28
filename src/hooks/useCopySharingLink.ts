/* eslint-disable no-console */
import toast from "react-hot-toast";
import { useScreenSize } from "./useScreenSize";

export const useCopySharingLink = () => {
  const { isMobile, isMobileDevice } = useScreenSize();

  const copyLink = () => {
    const url = window.location.href;

    // Копирование URL в буфер обмена, todo: create beatify modal for this
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success(
          "Ссылка успешно скопирована! Теперь вы можете поделиться ею в WhatsApp или любом другом приложении",
          { duration: 10000 },
        );
      })
      .catch((err) => {
        toast.error(
          "Не удалось скопировать ссылку, возможно Ваш браузер заблокировал это действие",
        );
        console.error("Ошибка при копировании: ", err);
      });
  };

  // Шеринг на мобильном устройстве в другие приложения
  const deviceShareLink = async () => {
    if (
      typeof navigator.share !== "undefined" &&
      (isMobileDevice || isMobile)
    ) {
      try {
        await navigator.share({
          title: "Roze Agency - Эксклюзивная недвижимость \n",
          text: "Посмотрите мою подборку недвижимости на Roze.kz!",
          url: window.location.href,
        });
      } catch (err) {
        toast.error(
          "Не удалось скопировать ссылку, возможно Вы отменили действие или Ваш браузер заблокировал это действие",
          { duration: 5000 },
        );

        console.error("Ошибка при шеринге: ", err);
      }
    } else {
      copyLink();
    }
  };

  return { copyLink, deviceShareLink };
};
