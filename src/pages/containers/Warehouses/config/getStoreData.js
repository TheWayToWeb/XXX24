// Функция возвращает объект склада
export const getStoreData = (data) => {
    if (!Array.isArray(data) || !data.length || data.length === 0 || !data[0].storages) {
        console.error("Ошибка при вызове функции getStoreData: Неправильный формат данных. Ожидалось data[0].storages");
    }

    return data[0].storages;
};