// Подключаем библиотеку React и хук memo
import React, { memo } from 'react';
// Подключаем библиотеку валидации параметров
import PropTypes from "prop-types";
// Подключаем библиотеку шаблонных строк
import classNames from "classnames";

// Подключаем навигационную панель
import DesktopNavbarView from "../../UI/DesktopNavbar/DesktopNavbarView.jsx";
// Подключаем компонент рабочей области
import { DesktopAppLauncher } from "../DesktopAppMenu/index.js";
// Подключаем компонент лаунчер вкладок
import { TabsLauncher } from '../../Containers/TabsLauncher/index.js';
// Подключаем компонент чата
import { Chat } from "../../modules/Chat/index.js";
// Подключаем компонент календаря
import { Calendar } from '../../modules/Calendar/index.js';

// Подключаем стили рабочего стола
import './styles/components/_desktop.less';
import './styles/elements/_desktop-typography.less';
import './styles/generated/_desktop-reset.less';

// Презентационный компонент рабочего стола
const DesktopView = memo(({ desktopBaseKey, showTabs, handleShowTabsClick }) => {
    return (
        <div className={classNames('Desktop', 'desktop')}>
            <DesktopNavbarView />
            <div className={classNames('desktop-title-box', 'desktop__title-box')}>
                <h1
                    className={classNames(
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