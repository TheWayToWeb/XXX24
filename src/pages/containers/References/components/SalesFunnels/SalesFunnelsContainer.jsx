// Подключаем библиотеку React
import React from 'react';
// Подключаем стили рабочего стола
import '../../../../../app/Desktop/styles/components/_desktop.less';
import '../../../../../app/Desktop/styles/settings/_desktop-theme.less';
// Подключаем дерево
import { Tree } from "../Tree/index.js";
// Презентационный компонент рабочего стола
const SalesFunnelsContainer = () => {
    return (
        <div className="Desktop">
            Анализ данных с помощью воронок
            <Tree />
        </div>
    );
};

export default SalesFunnelsContainer;