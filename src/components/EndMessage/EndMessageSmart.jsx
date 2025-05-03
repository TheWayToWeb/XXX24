import React, { useState, useEffect } from 'react';
import EndMessageView from "./EndMessageView.jsx";

const EndMessageSmart = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setVisible(false);
      }, 500);

      // Очистка таймера по размонтированию компонента
      return () => clearTimeout(timer);
  }, []);

  return (<EndMessageView visible={visible} />);
};

export default EndMessageSmart;