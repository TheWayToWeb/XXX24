// Подключаем библиотеку React
import React from 'react';
// Подключаем стили рабочего стола
import '../../../../../app/Desktop/styles/components/_desktop.less';
import '../../../../../app/Desktop/styles/settings/_desktop-theme.less';
// Подключаем дерево
import { Tree } from "../Tree/index.js";
// Подключаем презентационный компонент рабочего стола
const OrganizationsContainer = () => {
    return (
        <div className="Desktop">
            Справочник партнерских организаций
            <Tree />
        </div>
    );
};

export default OrganizationsContainer;