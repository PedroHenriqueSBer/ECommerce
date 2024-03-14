import { IProviderContextProps, IShortsContextProps } from "@/types/props";
import { createContext } from "react";

const ShirtsContext = createContext<IShortsContextProps>({} as IShortsContextProps)

export const ShirtsProvider = ({ children }:IProviderContextProps) => {
  return (
    <ShirtsContext.Provider value={{}}>
      {children}
    </ShirtsContext.Provider>
  )
}