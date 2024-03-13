"use client"
import { Dispatch, SetStateAction, useState } from "react"

export function useToggle(initValue: boolean = false) {

    const [toggleValue, setToggle] = useState<boolean>(initValue)

    function toggle() {
        setToggle(!toggleValue)
    }

    return [toggleValue, toggle as any] 
}