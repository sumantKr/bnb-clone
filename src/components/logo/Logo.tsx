"use client"
import { HomeTwoTone } from '@ant-design/icons'
import React from 'react'

function Logo() {
    return (
        <div className='flex items-end gap-x-2'>
            <span className='h-full'>
                <HomeTwoTone className='p-0 text-3xl' twoToneColor={"#4bc1a7"} />
            </span>
            <p className='hidden lg:block font-semibold text-xl text-primary'>Faraway</p>
        </div>
    )
}

export default Logo