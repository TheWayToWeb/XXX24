// Функция принимает setState и возвращает обработчик
const createInputCheckedHandler = (setState) => {
    return (e) => {
        setState(e.target.checked);
    }
};



export default createInputCheckedHandler;