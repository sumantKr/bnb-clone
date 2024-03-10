import { Button, ButtonProps } from 'antd'
import React, { MouseEvent } from 'react'
import ButtonStyles from "./CustomButton.module.scss"

import classNames from "classnames"
import { useAmp } from 'next/amp'
import { useToggle } from '@/hooks'
export interface CustomButtonProps extends ButtonProps {

}

function CustomButton(props: CustomButtonProps) {

    const [isLoading, toggleLoading] = useToggle(false)
    const { className, onClick } = props

    async function handleClick(e: MouseEvent<HTMLButtonElement>) {

        toggleLoading()
        try {
            if (onClick) {
                await onClick(e)
            }
        } catch (err) {}
        finally {
            toggleLoading()
        }
    }
    return (

        <Button className={classNames(ButtonStyles.CustomButton, className,
            "bg-teal-50 border-teal-200 active:border-teal-400"
            )} onClick={handleClick} {...props} />
    )
}

export default CustomButton