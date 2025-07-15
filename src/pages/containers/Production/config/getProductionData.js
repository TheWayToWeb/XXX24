// Функция возвращает объект производства
export const getProductionData = (data) => {
    if (!Array.isArray(data) || !data.length || data.length === 0 || !data[0].production) {
        console.error("Ошибка при вызове функции getProductionData: Неправильный формат данных. Ожидалось data[0].production");
    }

    return data[0].production;
}
