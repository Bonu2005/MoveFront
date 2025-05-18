import { useContext, createContext, useReducer, useState } from "react";

const Context = createContext();

export const LikeContext = ({ children }) => {
  const [like,setLike] = useState(false)
  return <Context.Provider value={{lang,setLang}}  >{children}</Context.Provider>;
};

export const useStateVal = () => useContext(Context);