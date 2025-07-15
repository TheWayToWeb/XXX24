// Подключаем библиотеку React и хук контекста
import React, { useContext } from "react";
// Подключаем библиотеку шаблонных строк
import classNames from "classnames";

// Подключаем контекст производства
import { ProductionContext } from "../../../../../../../pages/context/ProductionContext/ProductionContext.js";

// Подключаем объект маппинга полей формы оборудования
import { equipmentFormMappingTranslate as mappingTranslate } from "./config/equipmentFormMappingTranslate.js";

// Компонент формы добавления материала
const EquipmentForm = () => {

    // Получаем контекст производства
    const productionContext = useContext(ProductionContext);
    // Получаем оборудование из контекста
    const { facilities } = productionContext;

    // Получаем только ключи объекта оборудования
    const equipmentObjectKeys = Object.keys(facilities[0]);
    // Функция выполнения отбора только необходимых ключей оборудования
    const getFilteredKeys = (keys) => {
        return keys.filter(key => {
            return ['name', 'description', 'type'].includes(key);
        });
    };

    // Выполняем отбор необходимых ключей и сохраняем их
    const filteredEquipmentKeys = getFilteredKeys(equipmentObjectKeys);

    // Создаем маппинг ключей к соответствующим сообщениям об ошибках
    const errorMessages = {
        name: 'Наименование материала',
        description: 'Описание материала',
        type: 'Производственное оборудование'
    };

    // Функция отображения контента формы
    const renderFormFields = () => {
        return filteredEquipmentKeys.map(key => (
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
        ))
    };

    return (
        <form className={classNames('executor-form', 'form-vertical')}>
            {renderFormFields()}
        </form>
    );
};

export default EquipmentForm;