import { useState } from "react";

export const useTabsVisibility = () => {
    // Инициализируем состояние управления отображением табов
    const [showTabs, setShowTabs] = useState(false);
    // Обработчик управления отображением табов
    const handleShowTabsClick = () => {
        setShowTabs(prev => !prev);
    };
    // Возвращаем состояние с функцией его изменения
    return {
        showTabs,
        handleShowTabsClick
    };
};