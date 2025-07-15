// Подключаем библиотеку React
import React from 'react';
// Подключаем стили рабочего стола
import '../../../../../app/Desktop/styles/components/_desktop.less';
import '../../../../../app/Desktop/styles/settings/_desktop-theme.less';
// Подключаем дерево
import { Tree } from "../Tree/index.js";
// Блок презентационного компонента рабочего стола
const ContactsContainer = () => {
    return (
        <div className="Desktop">
           Рабочий стол контактов
            <Tree />
        </div>
    );
};

export default ContactsContainer;