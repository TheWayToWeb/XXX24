import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Импортируем PropTypes
import './SidebarStyles.css';
import './SidebarButtonsStyles.css';

const SidebarView = React.memo(({ initItems, active, handleClickLink }) => {
    const buttonsData = [
        { id: 1, label: '+', action: 'add' },
        { id: 2, label: '-', action: 'subtract' },
    ];
    const [activeButton, setActiveButton] = useState(null);
    const handleButtonClick = (item) => {
        setActiveButton(item.id);
    };

    return (
        <>
            <nav className="navbar Sidebar">
                {initItems.length > 0 ? <div className="navbar-collapse Sidebar-Collapse">
                    <ul className="navbar-nav Sidebar-List">
                        {initItems.map((item) => (
                            <li
                                className={`nav-item Sidebar-Item ${active === item.id ? 'Sidebar-Item_Active' : ''}`}
                                key={item.id}>
                                {
                                    item.id <= initItems.length - 1 && (
                                        <a
                                            className="nav-link Sidebar-Link"
                                            onClick={() => handleClickLink(item)}
                                        >
                                            {item.innerText}
                                        </a>
                                    )
                                }
                                {
                                    item.id === initItems.length ? (
                                        <div
                                            className="container-fluid"

                                        >
                                            <div className="row">
                                                <div
                                                    className="col-md-12"
                                                >
                                                    <a
                                                        type="button"
                                                        className={`nav-link Sidebar-Link ${active === item.id ? 'Sidebar-Link_Active' : ''}`}
                                                        onClick={() => handleButtonClick(item)}
                                                    >
                                                        {item.innerText}
                                                    </a>
                                                </div>
                                                <div className="col-md-12">
                                                    <div
                                                        className="btn-group SidebarButtons SidebarButtons_Horizontal"
                                                    >
                                                        {buttonsData.map((button) => (
                                                            <button
                                                                type="button"
                                                                className={`btn SidebarButton ${activeButton === button.id ? 'SidebarButton_Active' : ''}`}
                                                                id={`sidebarButton-${button.id}`}
                                                                key={button.id}
                                                                onClick={() => handleButtonClick(button)}
                                                            >{button.label}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                }
                            </li>
                        ))}
                    </ul>
                </div> : null}
            </nav>
        </>

    );
});

// Добавляем проверку типов пропсов с помощью PropTypes
SidebarView.propTypes = {
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

export default SidebarView;