// Подключаем библиотеку React и хук memo
import React, { memo } from 'react';
// Подключаем проверку входных параметров компонента
import PropTypes from 'prop-types';
// Подключаем библиотеку шаблонных строк
import classNames from 'classnames';

// Подключаем стили окна формы
import './styles/components/_form-modal.less';
import './styles/generated/_form-modal-reset.less';

// Компонент модального окна
const FormModal = memo(({ activeOverlayId, handleOverlayClose, children }) => {
    return (
       <div
           className={classNames(
               'modal',
               'form-modal'
           )}
           style={{ display: activeOverlayId ? 'block' : 'none' }}
           onClick={handleOverlayClose}
       >
           <div
               className={classNames(
                   'modal-dialog',
                   'modal-dialog-centered',
                   'modal-dialog-scrollable',
                   'form-modal__dialog'
               )}

           >
               <div
                    className={classNames(
                   'modal-content',
                        'form-modal__content'
                    )}
                    onClick={e => e.stopPropagation()}
               >
                   <div
                       className={classNames(
                       'modal-body',
                           'form-modal__body'
                        )}
                   >
                       { children }
                   </div>
               </div>
           </div>
       </div>
    );
});

PropTypes.FormModal = {
    activeOverlayId: PropTypes.number.isRequired,
    handleDismiss: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

export default FormModal;