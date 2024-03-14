import { Input, InputProps } from 'antd'
import React from 'react'

function CustomInput(inputProps: InputProps) {
    return (
        <Input {...inputProps} />
    )
}

export default CustomInput