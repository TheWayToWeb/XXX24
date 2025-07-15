// Подключаем библиотеку React
import React from 'react';
// Подключаем библиотеку работы с шаблонными строками
import classNames from "classnames";
// Подключаем стили рабочего стола
import '../../../../../app/Desktop/styles/components/_desktop.less';
import '../../../../../app/Desktop/styles/elements/_desktop-typography.less';
import '../../../../../app/Desktop/styles/settings/_desktop-theme.less';
// Подключаем компонент дерево
import { Tree } from "../Tree/index.js";
// Блок презентационного компонента рабочего стола
const CashDocumentsContainer = () => {
    return (
        <div className="Desktop">
            <h5
                className={classNames(
                    'Desktop-Title'
                )}
            >
                Рабочий стол кассовых документов
            </h5>
            <Tree />
        </div>
    );
}

export default CashDocumentsContainer;