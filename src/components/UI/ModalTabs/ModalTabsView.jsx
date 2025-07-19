// Подключаем библиотеку React и хук кэширования
import React, { memo } from 'react';
// Подключаем библиотеку шаблонных строк
import classNames from 'classnames';
// Подключаем библиотеку валидации параметров компонента
import PropTypes from 'prop-types';

// Подключаем стили окна с контентом
import './styles/components/_modal-tabs.less';
import './styles/elements/_modal-tabs.less';
import './styles/generated/_modal-tabs.less';
import './styles/settings/_modal-tabs-theme.less';

// Презентационный компонент окна с контентом
const ModalTabsView = memo(({ activeId, showModal, routes, handleListModalClose, children }) => {
    return (
        <div
            className={classNames(
                'modal',
                'lightbox'
            )}
            style={{ display: showModal ? 'block' : 'none' }}
        >
            <div className={classNames(
                'modal-dialog',
                'modal-xl',
                'lightbox__dialog'
            )}>
                <div className={classNames(
                    'modal-content',
                    'lightbox__content'
                )}>
                    <div className={classNames(
                        'modal-header',
                        'lightbox__header'
                    )}>
                        <h5 className={classNames(
                            'modal-title',
                            'lightbox__title'
                        )}>
                            {routes.find(route => route.id === activeId)?.name}
                        </h5>
                        <button
                            type="button"
                            className={classNames(
                                'btn-close',
                                'lightbox__button-close'
                            )}
                            onClick={handleListModalClose}
                        >
                            x
                        </button>
                    </div>
                    <div className={classNames(
                        'modal-body',
                        'lightbox__body'
                    )}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
});

ModalTabsView.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ModalTabsView;