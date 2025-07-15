// Подключаем библиотеку React
import React from 'react';
// Подключаем библиотеку работы с шаблонными строками
import classNames from "classnames";
// Подключаем стили рабочего стола
import '../../../../../app/Desktop/styles/components/_desktop.less';
import '../../../../../app/Desktop/styles/elements/_desktop-typography.less';
import '../../../../../app/Desktop/styles/settings/_desktop-theme.less';
// Подключаем дерево
import { Tree } from "../Tree/index.js";
// Блок презентационного компонента рабочего стола
const MaterialsProcessingContainer = () => {
    return (
        <div className="Desktop">
            <h3
                className={classNames(
                    'Desktop-Title'
                )}
            >
                Рабочий стол отчетов по переработке сырья
            </h3>
            <Tree />
        </div>
    );
};

export default MaterialsProcessingContainer;