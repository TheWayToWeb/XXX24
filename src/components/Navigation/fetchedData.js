// Импорт источника данных выпадающего списка
import { data } from "./data.js";
// Экспорт функции имитации получения данных по API
export const fetchedData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 300); // Делаем имитацию задержки в 300 м_сек
    });
};