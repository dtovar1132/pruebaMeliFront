'use client';
import { Dispatch, SetStateAction, createContext,  useMemo, useState } from "react";


interface IBreadcrumbContext {
    categories: string[];
    setCategories: Dispatch<SetStateAction<IBreadcrumbContext['categories']>>
}


export const BreadcrumbContext = createContext<IBreadcrumbContext>({
    categories: [],
    setCategories: (value: any) => value

});

type ProviderProps = {
  children: React.ReactNode;
};

const BreadcrumbContextProvider = ({ children }: ProviderProps) => {
  const [categories, setCategories] = useState<IBreadcrumbContext['categories']>([]);
  const value = useMemo(() => ({categories,setCategories}),[categories]);
  return (
    <>
      <BreadcrumbContext.Provider value={value}>
        {children}
      </BreadcrumbContext.Provider>
    </>
  );
};

export default BreadcrumbContextProvider;
