import { useState } from 'react';

const useSubmitNewClass = () => {
  const [Showing, setShowing] = useState(false);

  function toggle() {
    setShowing(!Showing);
  }

  return {
    Showing,
    toggle
  };
};

export default useSubmitNewClass;
