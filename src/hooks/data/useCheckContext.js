// Подключаем хук useContext из библиотеки React
import { useContext } from "react";

export const useCheckContext = (Context) => {
    // Выполняем сохранение контекста
    const context = useContext(Context);

    // Проверяем существование объекта
    if (!context) {
        console.error("Ошибка при получении контекста. Context is required.");

        return null;
    }

    return context;
};