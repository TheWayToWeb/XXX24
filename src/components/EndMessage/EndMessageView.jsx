import React, { useState, useEffect } from 'react';

const EndMessageView = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000);

        // Очистка таймера по размонтировании компонента
        return () => clearTimeout(timer);
    }, []);
    // Информационное сообщение не видно, не рендерим его
    if (!visible) return null;

    return (
        <div className="alert alert-info">Данных больше нет</div>
    );
};

export default EndMessageView;