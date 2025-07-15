export const formatCheckObjectValue = (value) => {
    if (typeof value === 'boolean') {
        return value ? 'Да' : 'Нет'
    }

    return value;
}