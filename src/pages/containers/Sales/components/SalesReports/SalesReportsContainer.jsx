// Подключаем React
import React from 'react';
// Подключаем стили рабочего стола
import '../../../../../app/Desktop/styles/components/_desktop.less';
import '../../../../../app/Desktop/styles/settings/_desktop-theme.less';
// Подключаем дерево
import { Tree } from "../Tree/index.js";
// Презентационный компонент рабочего стола
const SalesReportsContainer = () => {
    return (
        <div className="Desktop">
            Рабочий стол отчетов продаж
            <Tree />
        </div>
    );
};

export default SalesReportsContainer;