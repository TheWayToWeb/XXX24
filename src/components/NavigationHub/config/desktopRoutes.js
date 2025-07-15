// Подключаем функцию создания маршрута производства
import { createWorkbenchRoute } from "./createWorkbenchRoute.jsx";

// Подключаем дерево
import { Tree } from "../../Tabs/components/TabContent/components/Tree/index.js";
// Подключаем таблицу с постраничным отображением
import { Pagination } from "../../Tabs/components/TabContent/components/Table/components/Pagination/index.js";

// Создаем массив маршрутов для отображения на рабочем столе производства
export const desktopRoutes = [
    createWorkbenchRoute("tree", "Дерево", Tree),
    createWorkbenchRoute("table", "Таблица", Pagination)
];