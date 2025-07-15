// Функция проверяющая относится ли текущий массив к складу
export const isStore = (pathName) => {
    if (!pathName) return false;

    const validRoutes = [
        'acceptance',
        'batches',
        'transfer',
        'give_out',
        'cancellation',
        'stocks',
        'stock_balance',
        'inventory_audit',
        'posting',
        'storage',
        'product_export'
    ];

    return validRoutes.includes(pathName);
};