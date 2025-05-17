import React from "react";
import AdvancedDataCardListView from "./AdvancedDataCardListView.jsx";

const AdvancedDataCardIndexView = (props) => {
    const [type, ...rest] = props.params; // Сперва передаем, количество видимых элементов и тип

    return (
        <AdvancedDataCardListView
            renderedTypeList={type}
            rest={rest}
        />
    );
};

export default AdvancedDataCardIndexView;