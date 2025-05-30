import React, { useState, useEffect } from 'react';
import EndMessageView from "./InfiniteTableDataStateNotifyView.jsx";

const InfiniteTableDataStateNotifySmart = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setVisible(false);
      }, 1000);

      // Очистка таймера по размонтированию компонента
      return () => clearTimeout(timer);
  }, []);

  return (<EndMessageView visible={visible} />);
};

export default InfiniteTableDataStateNotifySmart;