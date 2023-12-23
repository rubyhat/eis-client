export const useCopySharingLink = () => {
  const copyLink = () => {
    const url = window.location.href;

    // Копирование URL в буфер обмена, todo: create beatify modal for this
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Ссылка скопирована в буфер обмена!");
      })
      .catch((err) => {
        console.error("Ошибка при копировании: ", err);
      });
  };

  return { copyLink };
};
