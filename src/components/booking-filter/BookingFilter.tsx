"use client"
import { SearchOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { SegmentedFilter } from '..'
import { IFilterOption } from '../segmented-filter/SegmentedFilter'


const bookingOptions: Array<IFilterOption> = [
    {
        label: "Anywhere",
        value: "Anywhere",
    },
    {
        label: "Any Week",
        value: "Any Week",
    },
    {
        label: "Any Guest",
        value: "Any Guest",
        Icon: SearchOutlined
    },

]

function BookingFilter() {
    const [selectedOption, setSelectedOption] = useState<number>(0)

    return (
        <SegmentedFilter filterOptions={bookingOptions} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
    )
}

export default BookingFilter