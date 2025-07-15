// Подключаем библиотеку React и хук контекста
import React, { useContext } from 'react';
// Подключаем библиотеку шаблонных строк
import classNames from "classnames";

// Подключаем контекст производства
import { ProductionContext } from "../../../../../../../pages/context/ProductionContext/ProductionContext.js";

// Подключаем объект маппинга полей формы заказа
import { orderFormTranslateMappingFields as mappingFields } from "./config/orderFormMappingTranslate.js";

// Компонент формы добавления заказа
const OrderForm = () => {
    // Получаем контекст производства
    const productionContext = useContext(ProductionContext);
    // Получаем только заказы из контекста
    const { orders } = productionContext;
    // Получаем только ключи заказа
    const orderObjectKeys = Object.keys(orders[0]);
    // Функция выполнения отбора только необходимых ключей заказа
    const getFilteredKeys = (keys) => {
        return keys.filter(key => {
            return ['orderName', 'orderDescription', 'status', 'startDate'].includes(key);
        });
    };

    // Выполняем отбор необходимых ключей и сохраняем их
    const filteredOrderKeys = getFilteredKeys(orderObjectKeys);

    // Создаем маппинг ключей к соответствующим сообщениям об ошибках
    const errorMessages = {
        'orderName': 'Заполните название заказа',
        'status': 'Выберите статус заказа',
        'orderDescription': 'Добавьте описание заказа',
        'startDate': 'Укажите дату начала выполнения'
    };

    // Функция отображения контента формы
    const renderFormFields = () => {
        return filteredOrderKeys.map(key => (
            <div
                key={key}
                className={classNames('form-group', 'executor-name')}
            >
                <label>{mappingFields[key]}</label>
                <input
                    type="text"
                    className={classNames('form-control', 'input-large')}
                />
                {errorMessages[key] && (
                    <div className={classNames('invalid-feedback')}>
                        {errorMessages[key]}
                    </div>
                )}
            </div>
        ))
    }

    return (
        <form className={classNames('executor-form form-vertical')}>
            {renderFormFields()}
        </form>
    );
};

export default OrderForm;