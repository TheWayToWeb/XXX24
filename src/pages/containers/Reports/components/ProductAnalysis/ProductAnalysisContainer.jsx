// Подключаем библиотеку React
import React from 'react';
// Подключаем стили рабочего стола
import '../../../../../app/Desktop/styles/components/_desktop.less';
import '../../../../../app/Desktop/styles/settings/_desktop-theme.less';
// Подключаем дерево
import { Tree } from "../Tree/index.js";
// Презентационный компонент рабочего стола
const ProductAnalysisContainer = () => {
    return (
        <div className="Desktop">
            Рабочий стол отчетов сотрудников
            <Tree />
        </div>
    );
};

export default ProductAnalysisContainer;