// Подключаем библиотеку React и хук контекста
import React, { useContext } from 'react';
// Подключаем библиотеку шаблонных строк
import classNames from 'classnames';

// Подключаем контекст склада
import { StoreContext } from "../../../pages/context/StoreContext/StoreContext.js";

// Подключаем объект маппинга полей формы материала
import {assortmentFormMappingTranslate as mappingTranslate} from "./config/assortmentFormMappingTranslate.js";

// Подключаем стили формы ввода данных
import '../styles/components/_form.less';
import '../styles/elements/_form-typography.less';
import '../styles/generated/_form-reset.less';

// Компонент формы добавления материалов
const AssortmentForm = () => {

    // Получаем контекст склада
    const storeContext = useContext(StoreContext);
    // Получаем материал из контекста
    const { materials } = storeContext;

    // Получаем только ключи объекта материала
    const materialObjectKeys = Object.keys(materials[0]);
    // Функция выполнения отбора только необходимых ключей материала
    const getFilteredKeys = (keys) => {
        return keys.filter(key => {
            return ['name', 'description'].includes(key);
        });
    };

    // Выполняем отбор необходимых ключей и сохраняем их
    const filteredMaterialKeys = getFilteredKeys(materialObjectKeys);

    // Создаем маппинг ключей к соответствующим сообщениям об ошибках
    const errorMessages = {
        'assortmentName': 'Заполните наименование материала',
        'assortmentDescription': 'Добавьте описание материала'
    };

    // Функция для отображения контента формы
    const renderFormFields = () => {
        return filteredMaterialKeys.map((key) => (
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

export default AssortmentForm;