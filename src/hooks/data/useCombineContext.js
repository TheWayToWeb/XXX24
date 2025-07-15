// Подключаем хук useContext из библиотеки React
import { useContext } from 'react';

// Подключаем контекст производства
import { ProductionContext } from "../../pages/context/ProductionContext/ProductionContext.js";
// Подключаем контекст склада
import { StoreContext } from "../../pages/context/StoreContext/StoreContext.js";

export const useCombineContext = () => {
    // C помощью useContext получаем контекст производства
    const production = useContext(ProductionContext);
    // С помощью useContext получаем контекст склад
    const store = useContext(StoreContext);

    return { production, store }
};