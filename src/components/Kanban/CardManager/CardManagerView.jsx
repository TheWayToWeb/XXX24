import React from 'react';
import AdvancedDataCardIndexView from "../AdvancedDataCard/AdvancedDataCardIndexView.jsx";
import NotifyLoadCardView from "../NotifyLoadCardView/NotifyLoadCardView.jsx";
import NotifyLoadView from "../../Application/NotifyLoad/NotifyLoadView.jsx";

const CardManagerView = ({ itemsVisible, type, visibleCount }) => {
    return (
        <>
            {itemsVisible.length > 0 ? (
                itemsVisible.map((item) => (
                    <AdvancedDataCardIndexView
                        itemsVisible={itemsVisible}
                        type={type}
                        visibleCount={visibleCount}
                        currentItemVisibleId={item.id}
                        key={item.id}
                    />
                ))
            ) : <NotifyLoadCardView notifyLoadComponent={ <NotifyLoadView/> }/>}
        </>
    );
};

export default CardManagerView;