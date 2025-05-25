import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterControlIndexView from "../../Navigation/RouterControlTabs/RouterControlIndexView.jsx";
import InfiniteScrollTableIndexView from "../../InfiniteTable/InfiniteScrollTable/InfiniteScrollTableIndexView.jsx";
import TreeIndexView from "../../RichTree/TreeIndexView.jsx";
import KanbanBoardIndexView from "../../Kanban/KanbanBoardIndexView.jsx";

const AppNavigatorView = () => {
  return (
      <>
          <BrowserRouter>
              <RouterControlIndexView />
              <Routes>
                  <Route path="/" element={<InfiniteScrollTableIndexView />} />
                  <Route path="/tree" element={<TreeIndexView />} />
                  <Route path="/kanban" element={<KanbanBoardIndexView />} />
              </Routes>
          </BrowserRouter>
      </>
  );
};

export default AppNavigatorView;