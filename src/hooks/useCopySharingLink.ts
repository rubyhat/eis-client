import toast from "react-hot-toast";

export const useCopySharingLink = () => {
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
        // eslint-disable-next-line no-console
        console.error("Ошибка при копировании: ", err);
      });
  };

  return { copyLink };
};
