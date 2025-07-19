import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterControlIndexView from "../../oldest/NavigationMenu/RouterControlTabs/RouterControlIndexView.jsx";
import InfiniteScrollTableIndexView from "../../oldest/InfiniteTable/InfiniteScrollTable/InfiniteScrollTableIndexView.jsx";
import KanbanBoardIndexView from "../../oldest/Kanban/KanbanBoardIndexView.jsx";

const AppNavigatorView = () => {
  return (
      <>
          <BrowserRouter>
              <RouterControlIndexView />
              <Routes>
                  <Route path="/" element={<InfiniteScrollTableIndexView />} />
                  {/*<Route path="/tree" element={} />*/}
                  <Route path="/kanban" element={<KanbanBoardIndexView />} />
              </Routes>
          </BrowserRouter>
      </>
  );
};

export default AppNavigatorView;