// Подключаем библиотеку React
import React from 'react';
// Подключаем стили рабочего стола
import '../../../../../app/Desktop/styles/components/_desktop.less';
import '../../../../../app/Desktop/styles/settings/_desktop-theme.less';
// Подключаем дерево
import { Tree } from "../Tree/index.js";
// Презентационный компонент рабочего стола
const GrossProfitContainer = () => {
    return (
        <div className="Desktop">
            Рабочий стол анализа валовой прибыли
            <Tree />
        </div>
    );
};

export default GrossProfitContainer;