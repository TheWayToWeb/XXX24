// Подключаем библиотеку React
import React from 'react';
// Подключаем библиотеку работы с шаблонными строками
import classNames from "classnames";
// Подключаем компонент дерево
import { Tree } from "../Tree/index.js";
// Подключаем стили рабочего стола
import '../../../../../app/Desktop/styles/components/_desktop.less';
import '../../../../../app/Desktop/styles/elements/_desktop-typography.less';
import '../../../../../app/Desktop/styles/settings/_desktop-theme.less';
// Блок презентационного компонента рабочего стола
const AccountMovementsContainer = () => {
    return (
       <div className="Desktop">
           <h3
               className={classNames(
                   'Desktop-Title'
               )}
           >
               Рабочий стол отчетов движения по счетам
           </h3>
           <Tree />
       </div>
    );
};

export default AccountMovementsContainer;