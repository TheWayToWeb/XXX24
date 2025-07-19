// Подключаем библиотеку React и хук состояния
import React, { useState, useRef } from 'react';
// Подключаем библиотеку работы с шаблонными строками
import classNames from "classnames";

// Подключаем иконки из библиотеки bootstrap
import { Chat } from "react-bootstrap-icons";

// Подключаем стили чата
import './styles/components/_chat.less';
import './styles/typography/_chat-toggle-typography.less';

// Подключаем темы чата
import '../../../styles/components/chat/themes/_chat-toggle-theme-white.less';
//import './styles/settings/_chat-toggle-theme-gray.less';
//import './styles/settings/_chat-toggle-theme-dark.less';

// Презентационный компонент чата
const ChatView = () => {
    // Инициализируем состояние отображения чата
    const chatRef = useRef(null);

    // Инициализируем состояние отображения чата
    const [isChatVisible, setIsChatVisible] = useState(false);

    // Обработчик управления отображением чата
    const handleChatOpen = () => {
        setIsChatVisible(true);
    };

    // Обработчик управления закрытием чата
    const handleChatClose = () => {
        setIsChatVisible(false);
    };
    // Рендер компонента чата
    return (
        <>
            <button
                className={classNames(
                    'btn',
                    'btn-light',
                    'chat-toggle'
                )}
                onClick={handleChatOpen}
            >
                <Chat />
            </button>
            <div
                className={classNames('modal')}
                style={{ display: (isChatVisible ? 'block' : 'none') }}
            >
                <div className={classNames('modal-dialog')}>
                    <div className={classNames('modal-content')}>
                        <div className={classNames('modal-header')}>
                            <button
                                className={classNames('btn-close')}
                                onClick={handleChatClose}
                            >
                                x
                            </button>
                        </div>
                        <div className={classNames('modal-body')}>
                            <div
                                className={classNames('chat-messages')}
                                ref={chatRef}
                            >
                                <p>Содержимое чата</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatView;