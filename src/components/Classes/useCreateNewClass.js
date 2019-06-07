import { useState } from 'react';

const useCreateNewClass = () => {
  const [Showing, setShowing] = useState(false);

  function toggle() {
    setShowing(!Showing);
  }

  return {
    Showing,
    toggle
  };
};

export default useCreateNewClass;
