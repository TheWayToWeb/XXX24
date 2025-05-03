import React from 'react';
import PropTypes from 'prop-types'; // Импортируем PropTypes
import './SidebarStyles.css';
import './SidebarButtonsStyles.css';

const SidebarView = ({ initItems, active, handleClickLink }) => {
    const buttonsData = [
        { id: 1, label: '+', action: 'add' },
        { id: 2, label: '-', action: 'subtract' },
    ];
    return (
        <>
            <nav className="navbar bg-light Sidebar">
                {initItems.length > 0 ? (
                    <div className="navbar-collapse Sidebar-Collapse">
                        <ul className="navbar-nav Sidebar-List">
                            {initItems.map((item) => (
                                <li
                                    className={`nav-item Sidebar-Item ${active === item.id ? 'Sidebar-Item_Active' : ''}`}
                                    key={item.id}
                                    onClick={() => handleClickLink(item)}
                                >
                                    <a className="nav-link Sidebar-Link">
                                        {item.innerText}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    null // Заменил JSX-комментарий на null, чтобы избежать ошибки рендеринга
                )}
            </nav>
            <div className="container SidebarButtonsContainer">
                <div className="row btn-group SidebarButtonItems">
                    {buttonsData.map((button) => (
                        <div
                            className=" col-sm-6 col-md-6 col-lg-6 col-xl-6 SidebarButtonItems-Column"
                            key={button.id}
                        >
                            <button
                                id={`sidebarButton-${button.id}`}
                                type="button"
                                className="btn btn-outline-primary SidebarButtonItems-Button"
                            >{button.label}</button>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
};

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