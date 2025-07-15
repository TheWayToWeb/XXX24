// Функция получения уникальных ключей для рендера столбцов таблицы
export const getUniqueKeysFromObjectData = (contextObjectData) => {
    if (contextObjectData && typeof contextObjectData === 'object') {
        // Используем множество для хранения уникальных ключей
        const allProps = new Set();

        // Получаем все массивы из переданного объекта
        const arrays = Object.values(contextObjectData);

        // Проверяем, являются ли все значения массивами
        if (!arrays.every(arr => Array.isArray(arr))) {
            console.error(`
                Ошибка при формировании табличных данных.
                Ожидалось, что все свойства переданного объекта
                являются массивами
            `);
        }

        // Проходим по каждому массиву
        arrays.forEach(array => {
            array.forEach(item => {
                Object.keys(item).forEach(key => {
                    // Проверяем, что свойство объекта также не является объектом
                    if (typeof item[key] !== 'object') {
                        allProps.add(key);
                    }
                });
            });
        });

        return allProps;
    }

    return null;
};