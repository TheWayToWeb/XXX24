import { useMemo, createContext } from "react";
// создаем контекст основного списка
export const NavbarListContext = createContext(null);
// функция для получения контекста списка
export const useNavbarListContext = (
    childItemId,
    handleClickChildList,
    removeListItem
) => {
    return useMemo(() => ({
        activeChildItemId: childItemId,
        handleActiveClickChildList: handleClickChildList,
        removeChildListItem: removeListItem
    }), [
        childItemId,
        handleClickChildList,
        removeListItem
    ]);
};
