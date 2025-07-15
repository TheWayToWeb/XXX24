// Подключаем библиотеку React
import React from 'react';
// Подключаем стили рабочего стола
import '../../../../../app/Desktop/styles/components/_desktop.less';
import '../../../../../app/Desktop/styles/settings/_desktop-theme.less';
// Подключаем компонент дерево
import { Tree } from "../Tree/index.js";
// Презентационный компонент рабочего стола
const PositionsContainer = () => {
    return (
        <div className="Desktop">
            Справочник должностей сотрудников
            <Tree />
        </div>
    );
};

export default PositionsContainer;