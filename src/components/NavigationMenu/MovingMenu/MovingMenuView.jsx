import React, { useState, useEffect, useRef } from 'react';
// импортируем библиотеку PropTypes
import PropTypes from 'prop-types';
import MovingMenuBurger from "./MovingMenuBurger/MovingMenuBurger.jsx";
import ContainerFluidView from "../../../shared/ContainerFluid/ContainerFluidView.jsx";
import './MovingMenuStyles.less';
import './MovingMenuTemporaryStyles.css';

const MovingMenuView = React.memo(({ isActive, onToggleMenu, menuItems }) => {
    const [buttonsData, setButtonsData] = useState([]);
    const menuRef = useRef(null);
    // Получение данных кнопок (запрос к API)
    useEffect(() => {
        const loadButtonsData = async () => {
            try {
                // Задержка сетевого запроса
                await new Promise(resolve => setTimeout(resolve, 1000));
                const fetchedDataControlButtons = [
                    { id: 1, label: '+', action: 'add' },
                    { id: 2, label: '-', action: 'substract' },
                    { id: 3, label: '0', action: 'counter'}
                ];
                setButtonsData(fetchedDataControlButtons)
            } catch (error) {
                console.error("Ошибка при получении данных кнопок бургер меню ", error);
                setButtonsData([]);
            }
        };

        loadButtonsData();
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isActive &&
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                !e.target.classList.contains('BurgerButton')) {
                onToggleMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isActive, onToggleMenu]);
    return (
        <div className="ContainerMoveMenu">
            <MovingMenuBurger
                isActive={isActive}
                onToggleMenu={onToggleMenu}
            />
            <nav
                className={`MovingMenu ${isActive ? 'MovingMenu_Appearing' : ''}`}
                ref={menuRef}
            >
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        className={`MovingMenu-Link ${item.isActive ? 'MovingMenu-Link_Active' : ''}`}
                        href={item.href}
                    >
                        {item.name}
                    </a>
                ))}
                <ContainerFluidView>
                {
                    buttonsData.map((button) => (
                        <div
                            key={button.id}
                            className="col-4 MainMenu-Column"
                        >
                            <div className="btn-group MainMenu-ControlsGroup MainMenu-ControlsGroup_Horizontal">
                                <button
                                    type="button"
                                    className={`btn MainMenu-Control control-${button.action}`}
                                    onClick={() => {
                                        // Здесь можно добавить логику для обработки действия кнопки
                                        console.log(`Button "${button.label}" clicked (${button.action})`);
                                    }}
                                >{button.label}</button>
                            </div>
                        </div>
                    ))
                }
                </ContainerFluidView>
            </nav>
        </div>
    );
});

MovingMenuView.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onToggleMenu: PropTypes.func.isRequired,
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isActive: PropTypes.bool,
        })
    ).isRequired,
};

export default MovingMenuView;
