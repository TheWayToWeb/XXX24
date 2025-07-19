// Подключаем библиотеку React и хук кэширования
import React, { memo } from 'react';
// Подключаем библиотеку валидации параметров компонента
import PropTypes from 'prop-types';

// Подключаем компонент рабочего стола
import { Desktop } from "../../components/Layouts/Desktop/index.js";

// Презентационный компонент шаблона рабочего стола
const Layout = memo(({ showTabs, handleShowTabsClick, desktopTitle }) => {
    return (
        <Desktop
            desktopBaseKey={desktopTitle}
            showTabs={showTabs}
            handleShowTabsClick={handleShowTabsClick}
        />
    );
});

PropTypes.Layout = {
    showTabs: PropTypes.bool.isRequired,
    handleShowTabsClick: PropTypes.func.isRequired,
    desktopTitle: PropTypes.string.isRequired
};

export default Layout;