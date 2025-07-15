// Подключаем библиотеку React
import React from "react";
// Подключаем стили рабочего стола
import '../../../../../app/Desktop/styles/components/_desktop.less';
import '../../../../../app/Desktop/styles/settings/_desktop-theme.less';
// Подключаем дерево
import { Tree } from "../Tree/index.js";
// Презентационный компонент рабочего стола
const DirectoriesCodesOperationsContainer = () => {
    return (
        <div className="Desktop">
            Справочник операционных кодов
            <Tree />
        </div>
    );
};

export default DirectoriesCodesOperationsContainer;