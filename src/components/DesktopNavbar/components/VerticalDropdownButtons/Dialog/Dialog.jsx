// Подключаем библиотеку React и хук memo
import React, { memo } from 'react';
// Подключаем проверку входных параметров компонента
import PropTypes from 'prop-types';
// Подключаем библиотеку шаблонных строк
import classNames from 'classnames';

// Компонент модального окна
const Dialog = memo(({ activeOverlayId, handleOverlayClose, children }) => {
    return (
       <div
           className={classNames('modal')}
           style={{ display: activeOverlayId ? 'block' : 'none' }}
       >
           <div
               className={classNames(
                   'modal-dialog',
                   'modal-dialog-centered',
                   'modal-dialog-scrollable'
               )}
           >
               <div className={classNames('modal-content')}>
                   <div className={classNames('modal-header')}>
                       <h1 className={classNames('modal-title')}>Modal title</h1>
                       <button
                           type="button"
                           className={classNames('btn-close')}
                           onClick={handleOverlayClose}
                       >
                           x
                       </button>
                   </div>
                   <div className={classNames('modal-body')}>
                       { children }
                   </div>
               </div>
           </div>
       </div>
    );
});

PropTypes.Dialog = {
    activeOverlayId: PropTypes.number.isRequired,
    handleDismiss: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default Dialog;