import React, { createContext, useContext } from 'react'
import { createTodododoStore, TStore } from "../Store/store";
import { useLocalObservable } from 'mobx-react-lite';

const TodododoContext = createContext<TStore | null>(null)


export const TodododoProvider = ({children}: {children: React.ReactNode}) => {
    const todododoStore = useLocalObservable(createTodododoStore)

    return (
        <TodododoContext.Provider value={todododoStore}>{children}</TodododoContext.Provider>
    )
}
export const useTodododoStore = () => useContext(TodododoContext)