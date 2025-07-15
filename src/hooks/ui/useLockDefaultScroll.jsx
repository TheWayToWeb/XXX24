import { useEffect } from 'react';

export function  useLockDefaultScroll() {
    useEffect(() => {
        // Отключить прокрутку при монтировании компонента
        document.body.style.overflow = 'hidden';

        // Восстановить при размонтировании
        return () => {
            document.body.style.overflow = '';
        };
    }, []);
}

