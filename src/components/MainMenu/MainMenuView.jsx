import React, {useEffect, useRef} from 'react';
import './MainMenuStyles.css';

const MainMenuView = ({ isActive, onToggleMenu, menuItems }) => {
    const menuRef = useRef(null);
    const buttonsData = [
        { id: 1, label: '+', action: 'add' },
        { id: 2, label: '-', action: 'subtract' },
    ];

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
        <>
            <div
                className={`BurgerButton ${isActive ? 'BurgerButton_Active' : ''}`}
                onClick={onToggleMenu}
            >
                <span></span>
            </div>
            <nav
                className={`MainMenu ${isActive ? 'MainMenu_Active' : ''}`}
                ref={menuRef}
            >
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        className={`MainMenu-Link ${item.isActive ? 'MainMenu-Link_Active' : ''}`}
                        href={item.href}
                    >
                        {item.name}
                    </a>
                ))}
                <div className="container-fluid MainMenuButtonsContainer">
                    <div className="row btn-group MainMenuButtonItems">
                        {
                            buttonsData.map((button) => (
                                <div
                                    key={button.id}
                                    className="col-md-6 col-xl-6 col-lg-6 MainMenuButtonItems-Column"
                                >
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary MainMenuButtonItems-Button"
                                        onClick={() => {
                                            // Здесь можно добавить логику для обработки действия кнопки
                                            console.log(`Button "${button.label}" clicked (${button.action})`);
                                        }}
                                    >{button.label}</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}

export default MainMenuView;
