import React, { useState } from 'react';
import DropdownView from "./DropdownView.jsx";

const DropdownSmart = () => {
  const [show, setShow] = useState(false);

  const handleClickDropdownMenu = () => {
      // Изменяем предыдущее состояние
      setShow(prevShow => !prevShow);
  }

  return (
      <DropdownView
        show={show}
        onToggle={handleClickDropdownMenu}
      />
  );
};

export default DropdownSmart;