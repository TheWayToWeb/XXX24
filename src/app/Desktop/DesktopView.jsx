// Подключаем библиотеку React и хук memo
import React, { memo } from 'react';
// Подключаем библиотеку валидации параметров
import PropTypes from "prop-types";
// Подключаем библиотеку шаблонных строк
import classNames from "classnames";

// Подключаем навигационную панель
import DesktopNavbarView from "../../components/DesktopNavbar/DesktopNavbarView.jsx";
// Подключаем компонент рабочей области
import { DesktopAppLauncher } from "../../components/DesktopAppLauncher";
// Подключаем компонент лаунчер вкладок
import { TabsLauncher } from '../../components/TabsLauncher';
// Подключаем компонент чата
import { Chat } from "./components/Chat";
// Подключаем компонент календаря
import { Calendar } from './components/Calendar';

// Подключаем стили рабочего стола
import './styles/components/_desktop.less';
import './styles/elements/_desktop-typography.less';
import './styles/generated/_desktop-reset.less';
import './styles/settings/_desktop-theme.less';

// Презентационный компонент рабочего стола
const DesktopView = memo(({ desktopBaseKey, showTabs, handleShowTabsClick }) => {
    return (
        <div className={classNames('Desktop', 'desktop')}>
            <DesktopNavbarView />
            <div className={classNames('desktop-title-box', 'desktop__title-box')}>
                <h1
                    className={classNames(
                        'alert',
                        'alert-light',
                        'Desktop-Title',
                        'desktop__title'
                    )}
                >
                    Рабочий стол { desktopBaseKey}
                </h1>
            </div>
            <DesktopAppLauncher>
                <>
                    <div className={classNames('desktop-app-launcher__column')}>
                        <TabsLauncher
                            handleShowTabsClick={handleShowTabsClick}
                            showTabs={showTabs}
                        />
                    </div>
                    <div className={classNames('desktop-app-launcher__column')}>
                        <Chat />
                    </div>
                    <div className={classNames('desktop-app-launcher__column')}>
                        <Calendar />
                    </div>
                </>
            </DesktopAppLauncher>
        </div>
    );
});

PropTypes.DesktopView = {
    desktopBaseKey: PropTypes.string.isRequired,
    handleShowTabsClick: PropTypes.func.isRequired,
    component: PropTypes.node.isRequired
};

export default DesktopView;