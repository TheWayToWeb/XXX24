// Подключаем библиотеку React и хуки useState, useRef, useMemo
import React, { useState, useMemo, useRef, memo } from 'react';
// Подключаем валидацию параметров
import PropTypes from "prop-types";

// Подключаем презентационный компонент дерева
import TreeView from "./TreeView.jsx";

// Подключаем кастомный хук проверки контекста
import { useCheckContext } from "../../../../../../hooks/data/useCheckContext.js";

// Подключаем обработчик управления состоянием открытия / закрытия дерева
import createToggleLevelListHandler from "./config/createToggleLevelListHandler.jsx";
// Блок умного компонента дерева
const TreeSmart = memo(({ Context }) => {
    const dropdownRef = useRef(null);
    // Инициализируем состояние видимости деревьев
    const [isTreeVisible, setIsTreeVisible] = useState(false);
    // Состояние для управления главной веткой дерева
    const [toggleLevelPrimary, setToggleLevelPrimary] = useState(false);
    // Функция для управления состоянием главной ветки
    const handleToggleLevelPrimary = createToggleLevelListHandler(setToggleLevelPrimary);
    // Функция показывающая дерево
    const handleExpand = () => {
        setIsTreeVisible(true)
    };
    // Функция скрывающая дерево
    const handleCollapse = () => {
        setIsTreeVisible(false);
    };

    // Сохраняем контекст производство
    const productionContext = useCheckContext(Context);
    console.log('XXX', productionContext);
    // Сохраняем кэшированную версию объекта производства
    const memoizedProduction = useMemo(() => productionContext, [productionContext]);

    return (
            <TreeView
                dropdownRef={dropdownRef}
                production={memoizedProduction}
                isTreeVisible={isTreeVisible}
                toggleLevelPrimary={toggleLevelPrimary}
                handleToggleLevelPrimary={handleToggleLevelPrimary}
                handleExpand={handleExpand}
                handleCollapse={handleCollapse}
            />
    );
});

TreeSmart.propTypes = {
    Context: PropTypes.object.isRequired
};

export default TreeSmart;

