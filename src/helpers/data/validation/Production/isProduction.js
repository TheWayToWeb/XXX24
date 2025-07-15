// Функция проверяющая относится ли текущий маршрут к производству
export const isProduction = (pathName) => {
    if (!pathName) return false;

    const validRoutes = [
        'production',
        'production_operations',
        'interoperational',
        'sawing',
        'cnc',
        'turning',
        'milling',
        'through_holes',
        'cold_landing',
        'hot_landing',
        'thread_rolling',
        'marking',
        'lazer',
        'heat_treatment',
        'grinding'
    ];

    return validRoutes.includes(pathName);
};