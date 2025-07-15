// Подключаем React
import React from 'react';
// Подключаем стили рабочего стола
import '../../../../../app/Desktop/styles/components/_desktop.less';
import '../../../../../app/Desktop/styles/settings/_desktop-theme.less';
// Подключаем дерево
import { Tree } from "../Tree/index.js";
// Презентационный компонент рабочего стола
const ShipmentContainer = () => {
    return (
        <div className="Desktop">
            Рабочий стол отгрузки
            <Tree />
        </div>
    );
};

export default ShipmentContainer;