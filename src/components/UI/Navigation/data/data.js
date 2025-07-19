// verticalMenuDataSource парсися при импорте
import { verticalMenuDataSource } from "./verticalMenuDataSource.js";
// Экспорт функции имитации получения данных по API
export const data = async () => {
    await new Promise(resolve => setTimeout(resolve, 150));
    // Данные уже распарсены
    return verticalMenuDataSource;
};