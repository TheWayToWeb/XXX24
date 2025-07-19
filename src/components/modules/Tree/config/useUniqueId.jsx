// Подключаем хуки useState, useEffect
import { useState, useEffect } from 'react';
// Подключаем генератор uuid
import { v4 } from 'uuid';

// Кастомный хук для генерации случайного ID при монтировании компонента
const useUniqueId = () => {
    // Храним уникальный идентификатор для связывания input и label
    const [relationshipId, setRelationshipId] = useState(null);
    // Вызываем effect для генерации случайного ID при монтировании
    useEffect(() => {
        // Генерируем случайный ID при монтировании компонента
        setRelationshipId(v4());
    }, []);

    return relationshipId;
};

export default useUniqueId;