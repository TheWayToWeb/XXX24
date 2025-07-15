// Функция получения значений по уникальным ключам
export const getValuesByUniqueKeys = (contextObjectData, uniqueKeys) => {
    // Проверяем объект, массив проверяем по условию в компоненте
    if (contextObjectData && typeof contextObjectData === 'object') {
        const result = {};
        // Инициализируем массивы столбцов по уникальным ключам
        uniqueKeys.forEach(key => {
            result[key] = [];
        });
        // Получаем значения из контекста и сохраняем в переменную
        const arrays = Object.values(contextObjectData);

        arrays.forEach(array => {
            array.forEach(item => {
                uniqueKeys.forEach(key => {
                    if (Object.prototype.hasOwnProperty.call(item, key)) {
                        if (item[key] !== null) {
                            result[key].push(item[key]);
                        }
                    } else {
                        result[key].push(undefined);
                    }
                });
            });
        });

        return result;
    }

    return null;
};