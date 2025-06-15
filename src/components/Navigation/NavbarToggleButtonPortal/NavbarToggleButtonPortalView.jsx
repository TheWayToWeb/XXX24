// Подключаем библиотеку React, хуки useState, useContext, memo
import React, { useState, useContext, memo } from 'react';
// Подключаем библиотеку ReactDOM
import ReactDOM from "react-dom";
// Подключаем библиотеку шаблонных строк
import classNames from "classnames";
// Подключаем prop-types
import PropTypes from "prop-types";
// Подключаем иконки из react-bootstrap
import { X } from 'react-bootstrap-icons';
import { Plus } from "react-bootstrap-icons";
import { ChevronDown } from "react-bootstrap-icons";
import { ChevronLeft } from "react-bootstrap-icons";
// Подключаем стили toggle-button
import './styles/components/_toggle-button.less'
import './styles/elements/_toggle-button-typography.less';
import './styles/generic/_toggle-button-reset.less';
import './styles/settings/_toggle-button-theme.less';
// Подключаем контекст toggle button
import { ToggleButtonStretchContext } from "../context/toggleButtonStretchContext.js";
// Блок презентационного компонента toggle button
const NavbarToggleButtonPortalView = memo(({
        handlerChangeWidthVerticalMenuNav,
        startWidthToggleButtonStyles,
        stretchedWidthToggleButtonStyles,
        isStretched
    }) => {
    // Получаем родительский элемент по его id
    const navbarToggleButtonContainer = document.getElementById("navbar-toggle-button-container");
    const { showScrolling, hideScrolling } = useContext(ToggleButtonStretchContext);
    // Состояние, чтобы скрывать текст по кнопке
    const [visibleBadge, setVisibleBadge] = useState(true);
    // Обработчик удаления текста с кнопкой close
    const handleHiddenBadge = () => {
        setVisibleBadge(false);
        // Вызываем функцию hideScrolling
        hideScrolling();
    };
    // Рендеринг toggle button в новый родитель
     return ReactDOM.createPortal(
         <button
             className={classNames(
                 'btn',
                 'VerticalMenu-ToggleButton',
                 'toggleButton'
             )}
             type="button"
             style={isStretched ? stretchedWidthToggleButtonStyles : startWidthToggleButtonStyles}
        >
             <div className={classNames(
                 'toggleButton__content'
             )}>
                 {!isStretched ? (
                     <span className={classNames(
                         'toggleButton__chevronLeft'
                     )}>
                        <ChevronLeft
                            onClick={handlerChangeWidthVerticalMenuNav}
                        />
                    </span>
                 ) : null}
             </div>
         { isStretched ? (
             <div
                 className={classNames(
                 'toggleButton__content'
                )}
             >
                 {isStretched ? (
                     <span className={classNames(
                         'toggleButton__chevronDown'
                     )}>
                        <ChevronDown
                            onClick={handlerChangeWidthVerticalMenuNav}
                        />
                    </span>
                 ) : null}
                 <div
                     className={classNames(
                     'toggleButton__wrapper', {
                            'd-none': !visibleBadge
                         }
                     )}
                 >
                    <span className={classNames(
                        'VerticalMenu-ButtonText'
                    )}>
                        Добавить список
                    </span>
                    <span
                        className={classNames(
                        'badge',
                            'toggleButton__badge',
                            'toggleButton__button',
                            'toggleButton__button--close'
                        )}
                        onClick={() => handleHiddenBadge()}
                    >
                        <X />
                    </span>
                </div>
                 <span
                     className={classNames(
                     'badge',
                         'toggleButton__badge',
                         'toggleButton__button',
                         'toggleButton__button--added'
                     )}
                     onClick={() => showScrolling()}
                 >
                     <Plus />
                 </span>
             </div>) : null }
        </button>, navbarToggleButtonContainer);
});

NavbarToggleButtonPortalView.propTypes = {
    handlerChangeWidthVerticalMenuNav: PropTypes.func.isRequired,
    startWidthToggleButtonStyles: PropTypes.object, // Объект стилей атрибута styles
    stretchedWidthToggleButtonStyles: PropTypes.object, // Объект стилей атрибута styles
    isStretched: PropTypes.bool.isRequired,
}

export default NavbarToggleButtonPortalView;