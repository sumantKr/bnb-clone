import { SearchOutlined } from '@ant-design/icons'
import { Segmented } from 'antd'
import React, { ReactNode } from 'react'

interface IFilterOption {
    label: string,
    value: string,
    Icon?: any
}

const filterOptions: Array<IFilterOption> = [
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
function filterOption({ label, value, Icon = null }: IFilterOption) {
    return {
        label:
            <div className='w-[8rem] flex items-center justify-between h-[2.5rem]'>
                <span className='w-full font-bold'>
                    {label}
                </span>
                {
                    Icon && <span className="span bg-teal-400 px-[0.75rem] shadow-lg shadow-teal-200 text-white  rounded-lg" >
                        <Icon />
                    </span>
                }
            </div>
        ,
        value
    }
}
function BookingFilter() {

    const bookingFilterOptions = filterOptions.map((props) => filterOption(props))

    return (
        <Segmented
            className='bg-teal-50 border-teal-100  border-2'
            defaultValue="Any Guest"
            // onChange={(value) => setAlignValue(value as Align)}
            options={bookingFilterOptions}
        />
    )
}

export default BookingFilter