// Подключаем библиотеку React
import React, {useState, useEffect, useRef} from 'react';
// Подключаем библиотеку шаблонных строк
import classNames from 'classnames';

// Подключаем минифицированный файл CSS-Bootstrap
// для стилизации компонентов
import 'bootstrap/dist/css/bootstrap.min.css';
// Подключаем стили набора иконок Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// Подключаем кастомный хук для блокировки стандартной прокрутки страницы
import { useLockDefaultScroll } from "../hooks/index.js";

// Подключаем основной компонент макета приложения
import AppFoundationView from "./AppLayout/AppLayout.jsx";

// Основной корневой компонент приложения:
// -главная точка входа в приложение
// -инициализирует приложение
// -управляет основным потоком рендеринга
// -включает глобальную логику
const App = () => {

    const [loadedThemes, setLoadedThemes] = useState({}); // Изначальна не подключена ни одна из тем
    const [currentTheme, setCurrentTheme] = useState('white');
    const [activeLock, setActiveLock] = useState('white');
    // Состояние для блокировки всех кнопок
    const [generalLock, setGeneralLock] = useState(false);
    const [isViewingCompleted, setIsViewingCompleted] = useState(false);

    const whiteButtonRef = useRef(null);
    const grayButtonRef = useRef(null);
    const darkButtonRef = useRef(null);

    useEffect(() => {
        import(`../styles/themes/white-theme.less`).then(() => {
            setLoadedThemes(prev => ({ ...prev, white: true }));
        })
            .catch(error => {
                console.error('Ошибка загрузки белой темы:', error);
            });
    }, []);

    useEffect(() => {
        // Добавляем обработчики событий клика
        const checkActiveButton = () => {
            if (document.activeElement === whiteButtonRef.current) {
                return null;
            } else if (document.activeElement === grayButtonRef.current) {
                setActiveLock('gray');
                setLoadedThemes({gray: true});
            } else if (document.activeElement === darkButtonRef.current) {
                setActiveLock('dark');
                setLoadedThemes({dark: true});
            }
        };

        document.addEventListener('focus', checkActiveButton);

        return () => {
            document.removeEventListener('focus', checkActiveButton);
        };
    }, []);

    const handleChangeTheme = async (themeName)  => {
        if (generalLock) return;

        if (!loadedThemes[themeName]) {
            // Если тема еще не загружена — импортируем её
            try {
                await import(`../styles/themes/${themeName}-theme.less`);
                setLoadedThemes(prev => ({ ...prev, [themeName]: true }));
                setActiveLock(themeName);
            } catch (error) {
                console.error(`Ошибка загрузки темы ${themeName}:`, error);
            }
        }

        setCurrentTheme(themeName);
        checkAllThemesLoaded();
    };

    // Функция для проверки всех активных тем
    const checkAllThemesLoaded = () => {
         if (Object.keys(loadedThemes).length !== 3) {
             return; // Если не все темы добавлены, то ничего не делаем
         }
         // Проверяем, что все значения true
        const allThemesLoaded = Object.values(loadedThemes).every(value => !!value);

         // Устанавливаем общую блокировку только если все темы были отображены
        if (allThemesLoaded) {
            setGeneralLock(true);
        }
    };

    // Функция проверки всех активных тем, исключая базовую
    const checkThemesExcludingDefault = () => {
        // Проверяем, что в объекте ровно 3 темы
        if (Object.keys(loadedThemes).length !== 3) {
            return false; // Если не все темы добавлены, то ничего не делаем
        }

        // Фильтруем темы, исключая базовую (white)
        const excludeDefaultTheme = Object.entries(loadedThemes).filter(
            ([key]) => key !== 'white'
        );

        // Проверяем, что все оставшиеся значения true
        const allThemesActive = excludeDefaultTheme.every(([value]) => value);

        return allThemesActive;
    };

    // Проверяем, что возвращает эта функция
    useEffect(() => {
        // Сохраняем булевский результат, возвращаемый функцией
        const result = checkThemesExcludingDefault();

        // Устанавливаем состояние просмотра в значение, которое вернула функция
        setIsViewingCompleted(result);

    }, [checkThemesExcludingDefault, loadedThemes])

    // Блокируем стандартную прокрутку страницы
    useLockDefaultScroll();

    return (
        <div className={classNames(`app-container ${currentTheme}`)}>
            <div>
                <button
                    ref={whiteButtonRef}
                    onClick={() => handleChangeTheme('white')}
                    type="button"
                    disabled={generalLock || activeLock === 'white'}
                >
                    { isViewingCompleted ? 'Завершить просмотр' : 'Белая тема' }
                </button>
                <button
                    ref={grayButtonRef}
                    type="button"
                    onClick={() => handleChangeTheme('gray')}
                    disabled={generalLock || activeLock === 'gray'}
                >
                    Серая тема
                </button>
                <button
                    ref={darkButtonRef}
                    type="button"
                    onClick={() => handleChangeTheme('dark')}
                    disabled={generalLock || activeLock === 'dark'}
                >
                    Темная тема
                </button>
            </div>
            <AppFoundationView />
            {/* Пока это группа кнопок для смены темы */}
        </div>
    );
};

export default App;
