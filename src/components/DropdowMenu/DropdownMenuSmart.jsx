import React from 'react';
import DropdownMenuView from "./DropdownMenuView.jsx";

const DropdownMenuSmart = () => {
    /* Вот тут нужно изменять логику, чтобы выпадающий список был всегда открыт */

  return (
      <DropdownMenuView show="null" onToggle="null"/>
  );
};

export default DropdownMenuSmart;