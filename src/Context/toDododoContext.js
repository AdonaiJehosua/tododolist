import { createContext, useContext } from 'react'
import { createTodododoStore } from "../Store/store";
import { useLocalObservable } from 'mobx-react-lite';

const TodododoContext = createContext(null)

export const TodododoProvider = ({ children }) => {
    const todododoStore = useLocalObservable(createTodododoStore)

    return (
        <TodododoContext.Provider value={todododoStore}>{children}</TodododoContext.Provider>
    )
}
export const useTodododoStore = () => useContext(TodododoContext)