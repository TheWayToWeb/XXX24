import React, {useEffect, useRef} from 'react';
import './MainMenuStyles.css';

const MainMenuView = ({ isActive, onToggleMenu, menuItems }) => {
    const menuRef = useRef(null);

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
            </nav>
        </>
    );
}

export default MainMenuView;
