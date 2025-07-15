// Проверяем наличие в item вложенного объекта
export const hasObjectProperty = (item) => {
    if (typeof item !== 'object' || item === null) {
        return true;
    }
    return Object.values(item).some(
        value => value !== null && typeof value === 'object' && !Array.isArray(value)
    );
};