// Библиотека валидации параметров
import PropTypes from "prop-types";
// Подключаем контекст производства
import { ProductionContext } from "../../context/ProductionContext/ProductionContext.js";
// Подключаем функцию возврата объекта производства
import { getProductionData } from "../../containers/Production/config/getProductionData.js";
// Подключаем источник данных
import data from '../../../services/data/data.json';

// Создаем провайдер производства
const ProductionProvider = ({ children }) => {
    // Получаем объект производство
    const production = getProductionData(data);

    return (
        <ProductionContext.Provider value={production}>
            {children}
        </ProductionContext.Provider>
    );
}

PropTypes.ProductionProvider = {
    children: PropTypes.element.isRequired
};

export default ProductionProvider;