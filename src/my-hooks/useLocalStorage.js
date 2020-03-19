import { useState } from 'react'

export const useLocalStorage = (key, initalValue) => {
    const [localValue, setLocalValue] = useState(() => window.localStorage.getItem(key) 
        ? JSON.parse(window.localStorage.getItem(key)) 
        : initalValue
    )    
    
    const setStorage = store => {
        setLocalValue(store)
        window.localStorage.setItem(key, JSON.stringify(store))
    }

    return [localValue, setStorage]
}