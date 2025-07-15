// Подключаем функцию создания маршрута склада
import { createStoragesWorkbenchRoute } from "./createStoragesWorkbenchRoute.jsx";

// Подключаем дерево
import { Tree } from "../../../../components/Tabs/components/TabContent/components/Tree";
// Подключаем таблицу с постраничным отображением
import { Pagination } from "../../../../components/Tabs/components/TabContent/components/Table/components/Pagination";

// Создаем массив маршрутов для отображения на рабочем столе склада
export const storagesDesktopsRoutes = [
    createStoragesWorkbenchRoute("tree", "Дерево", Tree),
    createStoragesWorkbenchRoute("table", "Таблица", Pagination)
];