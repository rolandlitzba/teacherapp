import { useState } from 'react';

const useModalForm = () => {
  const [Showing, setShowing] = useState(false);

  function toggle() {
    setShowing(!Showing);
  }

  return {
    Showing,
    toggle
  };
};

export default useModalForm;
