import { StoreContext } from "./StoreContext";
import { product_list } from "../../assets/assets";


function StoreContextProvider({children}) {
    const contextValue={product_list}

  return (
    <div>
      <StoreContext.Provider value={contextValue}>
        {children}
      </StoreContext.Provider>
    </div>
  )
}

export default StoreContextProvider
