import React from 'react';
import PropTypes from 'prop-types';
// Подключаем стили дерева
import '../../../../../components/Tabs/components/TabContent/components/Tree/styles/tree-switcher/elements/_tree-switcher-typography.less';
import '../../../../../components/Tabs/components/TabContent/components/Tree/styles/tree-switcher/components/_tree-switcher.less';

const TreeView = ({ data, checkedItems, onCheck }) => {
    const renderTreeItems = (items, level = 0) => {
        console.log(items);
        if (!items) return null;

        return Object.entries(items).map(([key, value]) => {
            if (Array.isArray(value)) {
                return (
                    <div key={key} style={{ marginLeft: `${level * 20}px` }}>
                        <div>
                            <input
                                type="checkbox"
                                checked={checkedItems[key] || false}
                                onChange={() => onCheck(key)}
                            />
                            <span>{key}</span>
                        </div>
                        {value.map((item, index) => (
                            <div key={`${key}-${index}`} style={{ marginLeft: `${(level + 1) * 20}px` }}>
                                <input
                                    type="checkbox"
                                    checked={checkedItems[item.id] || false}
                                    onChange={() => onCheck(item.id)}
                                />
                                <span>{`${item.name}  ${item.description}  ${item.date}: ${item.amount} ${item.currency}`}</span>
                            </div>
                        ))}
                    </div>
                );
            } else if (typeof value === 'object' && value !== null) {
                return (
                    <div key={key} style={{ marginLeft: `${level * 20}px` }}>
                        <div>
                            <input
                                type="checkbox"
                                checked={checkedItems[key] || false}
                                onChange={() => onCheck(key)}
                            />
                            <span>{key}</span>
                        </div>
                        {renderTreeItems(value, level + 1)}
                    </div>
                );
            }
            return null;
        });
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '10px' }}>
            {renderTreeItems(data)}
        </div>
    );
};

TreeView.propTypes = {
    data: PropTypes.object.isRequired,
    checkedItems: PropTypes.object.isRequired,
    onCheck: PropTypes.func.isRequired
};

export default TreeView;