import React, {createContext, useContext, useMemo} from 'react';
import { DataCardRendererContext } from "./DataCardRendererSmart.jsx";

// Импортируем созданные отдельные компоненты
import CommentDataCardIndexView from "./CommentDataCard/CommentDataCardIndexView.jsx";
import PostDataCardIndexView from "./PostDataCard/PostDataCardIndexView.jsx";
import TodoDataCardIndexView from "./TodoDataCard/TodoDataCardIndexView.jsx";
import UserDataCardIndexView from "./UserDataCard/UserDataCardIndexView.jsx";
import NotifyLoaderView from "../../Application/NotifyLoader/NotifyLoaderView.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export const DataCardRendererChildContext = createContext(null);

const cardComponents = {
    comment: CommentDataCardIndexView,
    post: PostDataCardIndexView,
    todo: TodoDataCardIndexView,
    user: UserDataCardIndexView
};

const DataCardRendererView = React.memo(({
    rendererVisibleItem,
    visibleItemButtonsForId
                                            }) => {
    const context = useContext(DataCardRendererContext);
    const { listType } = context;
    const CardComponent = useMemo(() => cardComponents[listType], [listType]);
     
    const contextValue = useMemo(() => ({
        rendererItem: rendererVisibleItem,
        visibleButtonsForId: visibleItemButtonsForId
    }), [rendererVisibleItem, visibleItemButtonsForId]);

    return (
        <DataCardRendererChildContext.Provider value={contextValue}>
            <CardComponent />
        </DataCardRendererChildContext.Provider>
    );
});

export default DataCardRendererView;