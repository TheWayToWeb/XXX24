// Подключаем библиотеку React
import React from 'react';
// Подключаем генератор случайных ID
import { v4 } from 'uuid';
// Подключение иконок из библиотеки bootstrap
import { Box, PersonAdd, Gear, PersonArmsUp, BoundingBoxCircles, FilePlus } from "react-bootstrap-icons";
// Инициализируем счетчик ID
let idCounter = 1;

// Функция увеличения счетчика
const getNextId = () => idCounter++
// Экспортируем массив иконок
export const formsIconList = [
    {
        id: getNextId(),
        icon: <Gear />,
        type: "gear",
        label: "Gear Icon",
        key: v4()
    },
    {
        id: getNextId(),
        icon: <Box />,
        type: "box",
        label: "Box Icon",
        key: v4()
    },
    {
        id: getNextId(),
        icon: <PersonAdd />,
        type: "personAdd",
        label: "Add Person",
        key: v4()
    },
    {
        id: getNextId(),
        icon: <PersonArmsUp />,
        type: 'personArmsUp',
        label: "Person Arms Up",
        key: v4()
    },
    {
        id: getNextId(),
        icon: <BoundingBoxCircles />,
        type: "boundingBoxCircles",
        label: "Bounding Box Circles",
        key: v4()
    },
    {
        id: getNextId(),
        icon: <FilePlus />,
        type: "filePlus",
        label: "FilePlus",
        key: v4()
    }
];