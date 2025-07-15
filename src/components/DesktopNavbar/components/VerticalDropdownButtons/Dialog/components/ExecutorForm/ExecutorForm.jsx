// Подключаем библиотеку React и хук контекста
import React, { useContext } from 'react';
// Подключаем библиотеку шаблонных строк
import classNames from 'classnames';

// Подключаем контекст производства
import { ProductionContext } from "../../../../../../../pages/context/ProductionContext/ProductionContext.js";

// Подключаем объект маппинга полей формы исполнителя
import { executorFormMappingTranslate as mappingTranslate } from "./config/executorFormMappingTranslate.js";

// Компонент формы добавления исполнителей
const ExecutorForm = () => {

    // получаем контекст производства
    const productionContext = useContext(ProductionContext);
    // Получаем исполнителей производства
    const { performers } = productionContext;

    // Получаем ключи объекта исполнителей
    const executorObjectKeys = Object.keys(performers[0]);
    // Функция выполнения отбора только ключей исполнителя
    const getFilteredKeys = (keys) => {
        return keys.filter((key) => {
            return ['firstName', 'lastName', 'position'].includes(key);
        });
    };

    // Выполняем отбор необходимых ключей и сохраняем их
    const filteredExecutorKeys = getFilteredKeys(executorObjectKeys);

    // Создаем маппинг ключей к соответствующим сообщениям об ошибках
    const errorMessages = {
        firstName: 'Заполните имя исполнителя',
        lastName: 'Заполните фамилию исполнителя',
        position: 'Заполните должность исполнителя'
    };

    // Функция отображения контента формы
    const renderFormFields = () => {
        return filteredExecutorKeys.map(key => (
            <div
                key={key}
                className={classNames('form-group', 'executor-name')}
            >
                <label>{mappingTranslate[key]}</label>
                <input
                    type="text"
                    className={classNames('form-control', 'input-large')}
                />
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

export default ExecutorForm;