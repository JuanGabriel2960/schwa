import { useState } from 'react'

export const useNavbar = () => {

    const [showNavbar, setNavbar] = useState<boolean>(false)

    const toggleNavbar = () => {
        setNavbar(prev => !prev)
    }

    const closeNavbar = () => {
        setNavbar(false)
    }

    return {
        showNavbar,
        toggleNavbar,
        closeNavbar
    }

}