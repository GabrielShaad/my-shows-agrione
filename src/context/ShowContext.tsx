import { Show } from '@/types/Shows'
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from 'react'

interface ShowContextProps {
    show: Show | null
    setShow: Dispatch<SetStateAction<Show | null>>
}

export const ShowContext = createContext<ShowContextProps | undefined>(
    undefined
)

export const ShowProvider = ({ children }: { children: ReactNode }) => {
    const [show, setShow] = useState<Show | null>(null)

    return (
        <ShowContext.Provider value={{ show, setShow }}>
            {children}
        </ShowContext.Provider>
    )
}
