// Подключаем библиотеку React
import React from 'react';
// Подключаем стили рабочего стола
import '../../../../../app/Desktop/styles/components/_desktop.less';
import '../../../../../app/Desktop/styles/settings/_desktop-theme.less';
// Подключаем дерево
import { Tree } from "../Tree/index.js";
// Презентационный компонент рабочего стола
const PriceChangesContainer = () => {
    return (
        <div className="Desktop">
            Рабочий стол анализа изменения цен
            <Tree />
        </div>
    );
};

export default PriceChangesContainer;