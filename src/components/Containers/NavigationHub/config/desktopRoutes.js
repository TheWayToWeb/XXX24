// Подключаем функцию создания маршрута производства
import { createWorkbenchRoute } from "./createWorkbenchRoute.jsx";

// Подключаем дерево
import { Tree } from "../../../modules/Tree/index.js";
// Подключаем таблицу с постраничным отображением
import { Pagination } from "../../../modules/Pagination/index.js";

// Создаем массив маршрутов для отображения на рабочем столе производства
export const desktopRoutes = [
    createWorkbenchRoute("tree", "Дерево", Tree),
    createWorkbenchRoute("table", "Таблица", Pagination)
];