// Подключаем библиотеку React, хуки memo, useRef, useState
import React, { useState, useEffect, useRef, memo } from 'react';
// Подключаем шаблонные строки
import classNames from 'classnames';
// Подключаем проверку параметров
import PropTypes from "prop-types";

// Подключаем компоненты комплексного дерева
import {StaticTreeDataProvider, Tree, UncontrolledTreeEnvironment} from "react-complex-tree";
// Подключаем конфигурацию комплексного дерева
import {treeDataItems} from "./config/configTreeData.js";
// Подключаем основной список кастомного дерева
import {TreeList} from "./components/TreeList/index.js";
// Подключаем иконки из библиотеки bootstrap
import {ChevronDown, ChevronRight} from "react-bootstrap-icons";


// Подключаем стили комплексного дерева
import './styles/reactComplexTree/component/_rct-tree.less';
import './styles/reactComplexTree/generated/_rct-tree-reset.less';
import './styles/reactComplexTree/settings/_rct-theme.less';
import './styles/reactComplexTree/elements/_rct-tree-typography.less';
// Подключаем стили для switcher
import './styles/tree-switcher/elements/_tree-switcher-typography.less';
import './styles/tree-switcher/components/_tree-switcher.less';
import './styles/tree-switcher/generated/_tree-switcher-reset.less';
import './styles/tree-switcher/settings/_tree-switcher-theme.less';
// Презентационный компонент дерева
const TreeView = memo(({
           dropdownRef,
            production,
            isTreeVisible,
            toggleLevelPrimary,
            handleToggleLevelPrimary,
            handleExpand,
            handleCollapse
}) => {

    // Инициализируем состояние видимости элементов комплексного дерева
    const [viewState, setViewState] = useState({});
    const itemRef = useRef(treeDataItems);
    // Создаем провайдер для комплексного дерева
    const dataProvider = new StaticTreeDataProvider(
        itemRef.current,
        (item, newName) => ({
            ...item,
            data: newName
        })
    );
    // Генерируем узлы комплексного дерева
    // Генерируем узлы для исполнителей
    production.performers.forEach((item) => {
        const key = `performer_${item.id}`;
        treeDataItems[key] = {
            index: key,
            data:`${item.firstName} ${item.lastName} (${item.position})`,
            isFolder:false
        };
    });

    // Аналогично для заказов
    production.orders.forEach((item) => {
        const key = `order_${item.id}`;
        treeDataItems[key] = {
            index: key,
            data:`${item.orderName}, процент выполнения: ${item.completionPercentage}`,
            isFolder: true,
            children: []
        };

        // Создаем узлы для свойств
        // description, status, startDate, endDate, amount, daysOnStage
        const statusKey = `${key}_status`;
        const descriptionKey = `${key}_description`;
        const startDateKey = `${key}_startDate`;
        const amountKey = `${key}_amount`;
        const daysOnStageKey = `${key}_daysOnStage`;

        treeDataItems[statusKey] = {
            index: statusKey,
            data: `${item.status}`,
            isFolder: false
        };

        treeDataItems[descriptionKey] = {
            index: descriptionKey,
            data: `${item.orderDescription}`,
            isFolder: false
        };

        treeDataItems[startDateKey] = {
            index: startDateKey,
            data: `Дата начала: ${item.startDate}`,
            isFolder: false
        };

        treeDataItems[amountKey] = {
            index: amountKey,
            data: `Количество шт: ${item.amount}`,
            isFolder: false
        }

        treeDataItems[daysOnStageKey] = {
            index: daysOnStageKey,
            data: `Дней в работе: ${item.daysOnStage}`,
            isFolder: false
        };

        // Связываем вложенные свойства с объектом оборудования
        treeDataItems[key].children = [
            statusKey,
            descriptionKey,
            startDateKey,
            amountKey,
            daysOnStageKey
        ];
    });

    // Для сортаментов
    production.assortments.forEach((item) => {
        const key = `assortment_${item.id}`;
        treeDataItems[key] = {
            index: key,
            data:`${item.assortmentName}`,
            isFolder: true,
            children: []
        };

        // Создаем узел для свойства type
        const descriptionKey = `${key}_description`;

        treeDataItems[descriptionKey] = {
            index: descriptionKey,
            data: `${item.assortmentDescription}`,
            isFolder: false
        };

        // Связываем вложенное свойство с объектом сортаментов
        treeDataItems[key].children = [descriptionKey];
    });

    // Для оборудования
    production.facilities.forEach((item) => {
        const key = `facilities_${item.id}`;
        treeDataItems[key] = {
            index: key,
            data:`${item.name}`,
            isFolder: true,
            children: []
        };

        // Создаем узлы для свойств type и description
        const typeKey = `${key}_type`;
        const descriptionKey = `${key}_description`;

        treeDataItems[typeKey] = {
            index: typeKey,
            data: `${item.type}`,
            isFolder: false
        };

        treeDataItems[descriptionKey] = {
            index: descriptionKey,
            data: `${item.description}`,
            isFolder: false
        };

        // Связываем вложенные свойства с объектом оборудования
        treeDataItems[key].children = [typeKey, descriptionKey];
    });

    // Связываем выпадающий список дерева (массив children) с основной веткой
    treeDataItems['performers'].children = production.performers.map(p => `performer_${p.id}`);
    treeDataItems['orders'].children = production.orders.map(o => `order_${o.id}`);
    treeDataItems['assortments'].children = production.assortments.map(as => `assortment_${as.id}`);
    treeDataItems['facilities'].children = production.facilities.map(f => `facilities_${f.id}`);

    // Состояние для задания базовой высоты дереву
    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setContainerHeight(window.innerHeight - 300);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // В компоненте отображаем одно из деревьев,
    // при изменении состояния isTreeVisible
    return (
        <>
            <div
                 className={classNames(classNames(
                 'btn-group',
                     'tree-select-toolbar'
                 ))}
            >
                <button
                    className={classNames(
                        'btn',
                        'tree-select-toolbar__button',
                        'tree-select-toolbar__button--expand'
                    )}
                    type="button"
                    onClick={handleExpand}
                >
                    Развернуть
                </button>
                <button
                    className={classNames(
                        'btn',
                        'tree-select-toolbar__button',
                        'tree-select-toolbar__button--collapse'
                    )}
                    type="button"
                    onClick={handleCollapse}
                >
                    Свернуть
                </button>
            </div>
            <div
                className={classNames('tree-view')}
                style={{ height: containerHeight }}
            >
                <div
                    ref={dropdownRef}
                    className={classNames(
                    'TreeRoot',
                        'tree-view__root'
                    )}
                    style={{display: `${isTreeVisible ? 'block' : 'none'}`}}
                >
                    <div
                        key={production.id}
                        className={classNames(
                            'tree-view__isFolder'
                        )}
                    >
                        <div className={classNames(
                            'btn-group',
                            'btn-group-sm',
                            'tree-view__title-container'
                        )}>
                            <button
                                className={classNames(
                                    'btn',
                                    'btn-light',
                                    'tree-view__button-title'
                                )}
                                onClick={handleToggleLevelPrimary}
                            >
                                {toggleLevelPrimary ? (<ChevronDown />): <ChevronRight />}

                            </button>
                            <button
                                className={classNames(
                                    'btn',
                                    'btn-light',
                                    'tree-view__title'
                                )}

                            >
                                Отрасли производства
                            </button>
                        </div>
                        {toggleLevelPrimary && (
                            <TreeList production={production} />
                        )}
                    </div>
                </div>
                <div
                    className={classNames(
                    'rct-tree-root-container'
                    )}
                    style={{display: `${!isTreeVisible ? 'block' : 'none'}`}}
                >
                    <UncontrolledTreeEnvironment
                        dataProvider={dataProvider}
                        getItemTitle={(item) => item.data}
                        viewState={viewState}
                        onViewStateChange={setViewState}
                    >
                        <div
                            className={classNames(
                                'rct-tree-main'
                            )}
                        >
                            <Tree
                                treeId="tree"
                                rootItem="root"
                            />
                        </div>
                    </UncontrolledTreeEnvironment>
                </div>
            </div>
        </>
    );
});

PropTypes.TreeView = {
    dropdownRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
    production: PropTypes.object.isRequired,
    isTreeVisible: PropTypes.bool.isRequired,
    toggleLevelPrimary: PropTypes.bool.isRequired,
    handleToggleLevelPrimary: PropTypes.func.isRequired,
    handleExpand: PropTypes.func.isRequired,
    handleCollapse: PropTypes.func.isRequired
};

export default TreeView;