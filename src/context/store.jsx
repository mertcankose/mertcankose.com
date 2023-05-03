import { createContext, useState } from "react";

const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <StoreContext.Provider
      value={{
        openMenu,
        setOpenMenu,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
