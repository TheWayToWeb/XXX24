// Библиотека валидации параметров
import PropTypes from "prop-types";
// Подключаем контекст производства
import { StoreContext } from "../../context/StoreContext/StoreContext.js";
// Подключаем функцию возврата объекта склада
import { getStoreData } from "../../containers/Warehouses/config/getStoreData.js";
// Подключаем источник данных
import data from '../../../services/data/data.json';

// Создаем провайдер склада
const StoreProvider = ({ children }) => {
  // Получаем объект склада
  const storages = getStoreData(data);

  return (
      <StoreContext.Provider value={storages}>
          { children }
      </StoreContext.Provider>
  );
};

PropTypes.StoreProvider = {
    children: PropTypes.element.isRequired
};

export default StoreProvider;