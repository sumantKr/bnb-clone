import { useState } from "react";
import { create } from "zustand";

interface IToggle {
    toggleValue: boolean,
    toggle: () => void
}

export const useToggle = create<IToggle>((set) => ({
    toggleValue: false,
    toggle: () => set(((state) => ({ toggleValue: !state.toggleValue })))
}))

interface IModalProps {
    isOpen: boolean,
    close: () => void,
    open: () => void,
}
export const useModal = create<IModalProps>((set) => ({
    isOpen: false,
    close: () => set({ isOpen: false }),
    open: () => set({ isOpen: true }),
})) 