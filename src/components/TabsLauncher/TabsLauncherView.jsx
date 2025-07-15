// Подключаем библиотеку React
import React from 'react';
// Подключаем библиотеку работы шаблонных строк
import classNames from 'classnames';
// Подключаем библиотеку валидации параметров компонента
import PropTypes from 'prop-types';

// Подключаем компонент отображения вкладок
import { NavigationHub } from "../NavigationHub/index.js";

// Подключаем иконки из библиотеки bootstrap
import { Dropbox } from "react-bootstrap-icons";

// Презентационный компонент отображающий вкладки
const TabsLauncherView = ({ handleShowTabsClick, showTabs }) => {
  return (
      <>
          <button
              className={classNames(
                  'btn',
                  'btn-light',
                  'desktop-app-launcher__button',
                  'desktop-title-box__tabs-data',
                  'desktop-app-launcher__tabs-data',
                  'desktop__button--show-tabs'
              )}
              onClick={handleShowTabsClick}
          >
              <Dropbox />
          </button>
          <NavigationHub showTabs={showTabs} />
      </>
  );
};

TabsLauncherView.propTypes = {
  handleShowTabsClick: PropTypes.func.isRequired,
  showTabs: PropTypes.bool.isRequired,
};

export default TabsLauncherView;