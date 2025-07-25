// Подключаем библиотеку React и хук состояния
import React, { useState } from 'react';
// Подключаем библиотеку работы с шаблонными строками
import classNames from "classnames";

// Подключаем иконки из библиотеки bootstrap
import { Calendar } from "react-bootstrap-icons";

// Подключаем стили кнопки отображения календаря
import './styles/components/_calendar-toggle.less';
import './styles/typography/_calendar-toggle-typography.less';

// Подключаем темы кнопки отображения календаря
import '../../../styles/components/calendar/themes/_calendar-toggle-theme-white.less';
//import './styles/settings/_calendar-toggle-theme-gray.less';
//import './styles/settings/_calendar-toggle-theme-dark.less';

// Презентационный компонент календаря
const CalendarView = () => {
    // Инициализируем состояние отображения календаря
    const [calendarVisible, setCalendarVisible] = useState(false);

    // Обработчик управления отображения календаря
    const handleCalendarVisible = () => {
        setCalendarVisible(true);
    };

    // Обработчик управления закрытием календаря
    const handleCalendarHide = () => {
        setCalendarVisible(false);
    };

    // Рендер календаря
    return (
        <>
            <button
                className={classNames(
                    'btn',
                    'btn-light',
                    'calendar-toggle'
                )}
                onClick={handleCalendarVisible}
            >
                <Calendar />
            </button>
            <div
                className={classNames('modal')}
                style={{ display: (calendarVisible ? 'block' : 'none') }}
            >
                <div className={classNames('modal-dialog')}>
                    <div className={classNames('modal-content')}>
                        <div className={classNames('modal-header')}>
                            <button
                                type="button"
                                className={classNames('btn-close')}
                                onClick={handleCalendarHide}
                            >
                                x
                            </button>
                        </div>
                        <div className={classNames('modal-body')}>
                            <p>В этом месте будет календарь</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CalendarView;