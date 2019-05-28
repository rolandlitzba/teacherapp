import { useState } from 'react';

const useModal = () => {
  const [Showing, setShowing] = useState(false);

  function toggle() {
    setShowing(!Showing);
  }

  return {
    Showing,
    toggle
  };
};

export default useModal;
