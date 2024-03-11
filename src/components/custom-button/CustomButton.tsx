import { Button, ButtonProps } from 'antd'
import React, { MouseEvent } from 'react'
import ButtonStyles from "./CustomButton.module.scss"

import classNames from "classnames"
import { useToggle } from '@/hooks'
import { LoadingOutlined } from '@ant-design/icons'
export interface CustomButtonProps extends ButtonProps {

}

function CustomButton(props: CustomButtonProps) {

    const [isLoading, toggleLoading] = useToggle(false)
    const { className, onClick, disabled, children } = props

    async function handleClick(e: MouseEvent<HTMLButtonElement>) {

        toggleLoading()
        try {
            if (onClick) {
                await onClick(e)
            }
        } catch (err) { }
        finally {
            toggleLoading()
        }
    }
    return (

        <Button className={classNames(ButtonStyles.CustomButton, className, "flex items-center justify-center bg-teal-50 border-teal-200 !hover:bg-teal-100 disabled:opacity-50")}
            onClick={handleClick}
            disabled={disabled || isLoading}
            {...props}>
            {isLoading && <LoadingOutlined  />}
            <div className='flex-1 px-1'>
                {children}
            </div>
        </Button>
    )
}

export default CustomButton