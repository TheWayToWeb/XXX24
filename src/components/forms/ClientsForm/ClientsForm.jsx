// Подключаем библиотеку React и хук контекста
import React, { useContext } from 'react';
// Подключаем библиотеку шаблонных строк
import classNames from "classnames";

// Подключаем контекст склада
import { StoreContext } from "../../../pages/context/StoreContext/StoreContext.js";

// Подключаем объект маппинга полей формы клиента
import {clientsFormMappingTranslate as mappingTranslate} from "./config/clientsFormMappingTranslate.js";

// Подключаем стили формы ввода данных
import '../styles/components/_form.less';
import '../styles/elements/_form-typography.less';
import '../styles/generated/_form-reset.less';

// Компонент формы добавления клиентов
const ClientsForm = () => {

    // Получаем контекст склада
    const storeContext = useContext(StoreContext);
    // Получаем клиентов из контекста
    const { clients } = storeContext;

    // Получаем только ключи объекта клиента
    const clientObjectKeys = Object.keys(clients[0]);
    // Функция выполнения отбора только необходимых ключей объекта клиента
    const getFilteredKeys = (keys) => {
        return keys.filter(key => {
            return ['firstName', 'lastName', 'position', 'email', 'phone'].includes(key);
        });
    };

    // Выполняем отбор необходимых ключей клиента и сохраняем их
    const filteredClientsKeys = getFilteredKeys(clientObjectKeys);

    // Создаем маппинг ключей к соответствующим сообщениям об ошибках
    const errorMessages = {
        firstName: "Имя клиента",
        lastName: 'Фамилия клиента',
        position: 'Должность клиента',
        email: 'Эл.почта',
        phone: 'Телефон для связи'
    };

    // Функция для отображения контента формы
    const renderFormFields = () => {
        return filteredClientsKeys.map((key) => (
           <div
               key={key}
               className={classNames('form-group', 'executor-name')}
           >
                <label>{mappingTranslate[key]}</label>
                <input type="text" className={classNames('form-control', 'input-large')}  />
               {errorMessages[key] && (
                   <div className={classNames('invalid-feedback')}>{errorMessages[key]}</div>
               )}
           </div>
        ));
    };

    return (
        <form className={classNames('executor-form', 'form-vertical')}>
            {renderFormFields()}
        </form>
    );
};

export default ClientsForm;