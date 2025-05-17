import React from "react";
import AdvancedDataCardListView from "./AdvancedDataCardListView.jsx";

const AdvancedDataCardIndexView = ({ itemsVisible, type, visibleCount, currentItemVisibleId }) => {

    return (
        <AdvancedDataCardListView
            renderedTypeList={type}
            rest={itemsVisible}
            visibleCount={visibleCount}
            currentItemVisibleId={currentItemVisibleId}
        />
    );
};

export default AdvancedDataCardIndexView;