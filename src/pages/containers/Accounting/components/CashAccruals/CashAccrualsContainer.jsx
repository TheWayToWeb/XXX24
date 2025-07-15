// Подключаем библиотеку React
import React from 'react';
// Подключаем стили рабочего стола
import '../../../../../app/Desktop/styles/components/_desktop.less';
import '../../../../../app/Desktop/styles/elements/_desktop-typography.less';
import '../../../../../app/Desktop/styles/settings/_desktop-theme.less';
// Подключаем компонент дерево
import { Tree } from "../Tree/index.js";
import classNames from "classnames";
// Блок презентационного компонента рабочего стола
const CashAccrualsContainer = () => {
    return (
        <div className="Desktop">
            <h3
                className={classNames(
                    'Desktop-Title'
                )}
            >
                Рабочий стол анализа отчетов о начислениях
            </h3>
            <Tree />
        </div>
    );
};

export default CashAccrualsContainer;