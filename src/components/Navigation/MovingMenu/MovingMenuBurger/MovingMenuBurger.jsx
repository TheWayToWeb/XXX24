import React from 'react';
import './MovingMenuBurger.less';

const MovingMenuBurger = ({ isActive, onToggleMenu }) => {
    return (
        <div
            className={`MovingMenuBurger ${isActive ? 'MovingMenuBurger_Active' : ''}`}
            onClick={onToggleMenu}
        >
            <span />
        </div>
    );
};

export default MovingMenuBurger;