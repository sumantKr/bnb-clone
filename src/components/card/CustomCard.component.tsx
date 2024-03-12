import { Card, CardProps } from 'antd'
import classNames from 'classnames'
import React from 'react'

function CustomCard({ children, ...props }: CardProps) {
    const { className } = props
    return (
        <Card
            className={classNames(className, "shadow-lg")}
            {...props} >{children}</Card>
    )
}

export default CustomCard