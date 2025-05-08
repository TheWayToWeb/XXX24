import React from 'react';
import PropTypes from 'prop-types'; // Импортируем PropTypes
import './SidebarStyles.css';
import './SidebarButtonsStyles.css';

const SidebarView = React.memo(({ initItems, active, handleClickLink }) => {
    const buttonsData = [
        { id: 1, label: '+', action: 'add' },
        { id: 2, label: '-', action: 'subtract' },
    ];
    return (
        <>
            <nav className="navbar Sidebar">
                {initItems.length > 0 ? <div className="navbar-collapse Sidebar-Collapse">
                    <ul className="navbar-nav Sidebar-List">
                        {initItems.map((item) => (
                            <li
                                className={`nav-item Sidebar-Item ${active === item.id ? 'Sidebar-Item_Active' : ''}`}
                                key={item.id}
                                onClick={() => handleClickLink(item)}
                            >
                                {
                                    item.id <= initItems.length - 1 && (
                                        <a className="nav-link Sidebar-Link">
                                            {item.innerText}
                                        </a>
                                    )
                                }
                                {
                                    item.id === initItems.length ? (
                                        <div
                                            className="container-fluid"
                                            id="fullWidthItemContainer"
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <a className="nav-link Sidebar-Link">
                                                        {item.innerText}
                                                    </a>
                                                </div>
                                                <div className="col-md-6">
                                                    <div
                                                        className="btn-group-vertical SidebarButtons SidebarButtons_Vertical"
                                                    >
                                                        {buttonsData.map((button) => (
                                                            <button
                                                                type="button"
                                                                className="btn SidebarButton"
                                                                key={button.id}
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
            <div className="container">
                <div className="row btn-group SidebarButtons SidebarButtons_Horizontal">
                    {buttonsData.map((button) => (
                        <div
                            className="col-sm-6"
                            key={button.id}
                        >
                            <button
                                id={`sidebarButton-${button.id}`}
                                type="button"
                                className="btn SidebarButton"
                            >{button.label}</button>
                        </div>
                    ))}
                </div>
            </div>
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