// Подключаем компонент дерева
import { Tree } from "../../../../Tabs/components/TabContent/components/Tree/index.js";
// Подключаем компонент таблицы с постраничным отображением
import { Pagination } from "../../../../Tabs/components/TabContent/components/Table/components/Pagination/index.js";

export const pagesContentConfig = {
    production: {
        components: [Tree, Pagination],
        type: "production"
    },
    storages: {
        components: [Tree, Pagination],
        type: "storages"
    }
};