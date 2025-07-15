import React, { useContext } from 'react';
import KanbanListSmart from "./KanbanListSmart.jsx";
import { KanbanBoardChildrenContext } from "../KanbanBoardSmart.jsx";

const KanbanListIndexView = React.memo(({ index }) => {
    const kanbanBoardChildrenContext = useContext(KanbanBoardChildrenContext);
    const { comments, posts, users, todos } = kanbanBoardChildrenContext;

    return (
        <KanbanListSmart
            index={index}
            comments={comments}
            posts={posts}
            users={users}
            todos={todos}
        />
    );
});

export default KanbanListIndexView;