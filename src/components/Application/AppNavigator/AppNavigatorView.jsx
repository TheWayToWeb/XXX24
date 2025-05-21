import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TabsRouterIndexView from "../../Navigation/TabsRouter/TabsRouterIndexView.jsx";
import InfiniteScrollTableIndexView from "../../InfiniteTable/InfiniteScrollTable/InfiniteScrollTableIndexView.jsx";
import TreeDataView from "../../RichTree/RichTreeView.jsx";
import KanbanBoardIndexView from "../../Kanban/KanbanBoard/KanbanBoardIndexView.jsx";

const AppNavigatorView = () => {
  return (
      <>
          <BrowserRouter>
              <TabsRouterIndexView />
              <Routes>
                  <Route path="/" element={<InfiniteScrollTableIndexView />} />
                  <Route path="/tree" element={<TreeDataView />} />
                  <Route path="/kanban" element={<KanbanBoardIndexView />} />
              </Routes>
          </BrowserRouter>
      </>
  );
};

export default AppNavigatorView;