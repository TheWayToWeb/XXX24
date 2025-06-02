import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types'; // Импортируем PropTypes
import './DropdownMenuListStyles.less';
import './SidebarButtonsStyles.css';
import { ButtonStretchContext } from "./DropdownMenuSmart.jsx";
import classNames from "classnames";

const DropdownMenuListView = React.memo(({ initItems, active, handleClickLink }) => {
    const [activeIndexItem, setActiveIndexItem] = useState(false);
    const { canStretch, stretchSideMenuWidth } = useContext(ButtonStretchContext);

    const handleActiveItemClick = (item) => {
        const { id } = item;
        setActiveIndexItem(id);
    };

    return (
        <>
            <nav className="navbar Sidebar">
                {initItems.length > 0 ? <div className="navbar-collapse Sidebar-Collapse">
                    <ul
                        className="navbar-nav Sidebar-List"
                        style={{
                            width: `${stretchSideMenuWidth}px`,
                            transition: 'width 0.5s ease'
                        }}
                    >
                        {initItems.map((item) => (
                            <li
                                key={item.id}
                                className={classNames(
                                    'nav-item',
                                    'Sidebar-Item', {
                                        'Sidebar-Item_Active': activeIndexItem === item.id
                                    })}
                                onClick={() => handleActiveItemClick(item)}
                            >
                                {canStretch ? (
                                    <a className="nav-link Sidebar-Link">{ item.text }</a>
                                ) : (<span>Any Icon</span>)}
                            </li>
                        ))}
                    </ul>
                </div> : null}
            </nav>
        </>

    );
});

// Добавляем проверку типов пропсов с помощью PropTypes
DropdownMenuListView.propTypes = {
    initItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            innerText: PropTypes.string.isRequired,
            // Добавьте другие ожидаемые свойства объекта item
        })
    ).isRequired,
    active: PropTypes.number,
    handleClickLink: PropTypes.func.isRequired,
};

export default DropdownMenuListView;