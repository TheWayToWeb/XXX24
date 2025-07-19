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

// Подключаем стили элемента отображения вкладок
import './styles/components/_tabs-launcher.less';
import './styles/typography/_tabs-launcher-typography.less';

// Презентационный компонент элемента отображения вкладок
const TabsLauncherView = ({ handleShowTabsClick, showTabs }) => {
  return (
      <div className={classNames('tabs-launcher')}>
          <button
              className={classNames(
                  'btn',
                  'btn-light',
                  'desktop-title-box__tabs-data',
                  'desktop__button--show-tabs',
                  'tabs-launcher__button'
              )}
              onClick={handleShowTabsClick}
          >
              <Dropbox />
          </button>
          <NavigationHub showTabs={showTabs} />
      </div>
  );
};

TabsLauncherView.propTypes = {
  handleShowTabsClick: PropTypes.func.isRequired,
  showTabs: PropTypes.bool.isRequired,
};

export default TabsLauncherView;