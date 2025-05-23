import React, { useState } from 'react';
import DropdownMenuView from "./DropdownMenuView.jsx";

const DropdownMenuSmart = () => {
  const [show, setShow] = useState(false);

  const handleClickDropdownMenu = () => {
      // Изменяем предыдущее состояние
      setShow(prevShow => !prevShow);
  }

  return (
      <DropdownMenuView
        show={show}
        onToggle={handleClickDropdownMenu}
      />
  );
};

export default DropdownMenuSmart;