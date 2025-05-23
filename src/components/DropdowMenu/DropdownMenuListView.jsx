import React, { useState, useEffect } from 'react';
import ContainerFluidView from "../Application/ContainerFluid/ContainerFluidView.jsx";
import PropTypes from 'prop-types'; // Импортируем PropTypes
import './DropdownMenuListStyles.css';
import './SidebarButtonsStyles.css';

const DropdownMenuListView = React.memo(({ initItems, active, handleClickLink }) => {
    const [activeButton, setActiveButton] = useState(null);
    const [buttonsData, setButtonsData] = useState([]);
    // Имитация асинхронной операции получения данных кнопок (запрос к API)
    useEffect(() => {
        const loadButtonsData = async () => {
            try {
                // Задержка имитации сетевого запроса
                await new Promise(resolve => setTimeout(resolve, 500));
                const fetchedDataControlButtons = [
                    { id: 1, label: '+', action: 'add' },
                    { id: 2, label: '-', action: 'subsctract' },
                    { id: 3, label: '0', action: 'counter'}
                ];
                setButtonsData(fetchedDataControlButtons);
            } catch (error) {
                console.error("Ошибка при получении данных кнопок боковой панели: ", error);
                setButtonsData([]);
            }
        };

        loadButtonsData();
    }, []);
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
                                                    className="col-12"
                                                >
                                                    <a
                                                        type="button"
                                                        className={`nav-link Sidebar-Link ${active === item.id ? 'Sidebar-Link_Active' : ''}`}
                                                        onClick={() => handleButtonClick(item)}
                                                    >
                                                        {item.innerText}
                                                    </a>
                                                </div>
                                                <div className="col-12">
                                                    <div
                                                        className="btn-group SidebarButtons SidebarButtons_Horizontal"
                                                    >
                                                        {buttonsData.map((button) => (
                                                            <button
                                                                type="button"
                                                                className={`btn SidebarButton ${activeButton === button.id ? 'SidebarButton_Active' : ''}`}
                                                                id={`sidebar-${button.action}`}
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