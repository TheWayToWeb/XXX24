// Подключаем хук useLocation для получения текущей информации о маршруте
import { useLocation } from "react-router-dom";

// Хук получения данных текущего маршрута
export const useGettingRouteData = () => {
    // Сохраняем в переменную текущий маршрут
    const location = useLocation();
    // Извлекаем базовый путь
    const currentDesktopBase = location.pathname.split('/')[1];

    // Возвращаем значение пути в виде строки
    return currentDesktopBase;
};