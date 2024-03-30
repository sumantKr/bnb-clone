"use client"
import classNames from 'classnames'
import { Dispatch, MouseEventHandler, SetStateAction } from 'react'

export interface IFilterOption {
    label: string,
    value: string,
    Icon?: any,
}
export interface IFilterTab {
    id: number,
    label: string,
    value: string,
    Icon?: any,
    selectedOption?: number,
    setSelectedOption: Dispatch<SetStateAction<number>>
}

function FilterOption({ label, value, Icon = null, id, selectedOption, setSelectedOption }: IFilterTab) {

    const handleFilterChange: MouseEventHandler<HTMLDivElement> = (e) => {
        const activeFilter = document.getElementById("FilterActive")
        console.debug(`🚀 ~ FilterOption ~ activeFilter:`, activeFilter);
        if (activeFilter) {
            activeFilter.style.left = `${(e.target as HTMLDivElement).offsetLeft}px`
            activeFilter.style.width = `${(e.target as HTMLDivElement).offsetWidth}px`
            // console.debug(`🚀 ~ FilterOption ~ activeFilter left:`, activeFilter.offsetLeft);
            // console.debug(`🚀 ~ FilterOption ~ e left:`, (e.target as HTMLDivElement).offsetLeft);
        }
        setSelectedOption(id)

    }
    return (

        <div className={classNames('w-[10rem] flex   items-center justify-between  h-[2.5rem] rounded-xl p-2 cursor-pointer ')}
            onClick={handleFilterChange}
        >
            <span className='pointer-events-none w-full font-semibold text-center'>
                {label}
            </span>
            {
                Icon && <span className=" pointer-events-none bg-teal-400 h-[1.5rem]  px-[0.75rem] shadow-lg shadow-teal-200 text-white  rounded-lg" >
                    <Icon />
                </span>
            }
        </div >

    )
}

export interface ISegmentedFilterProps {
    filterOptions: Array<IFilterOption>,
    selectedOption: number,
    setSelectedOption: Dispatch<SetStateAction<number>>
}

function SegmentedFilter({ filterOptions, selectedOption, setSelectedOption }: ISegmentedFilterProps) {

    const bookingFilterOptions = filterOptions.map((props: IFilterOption, key) => <FilterOption key={key} id={key} {...props} setSelectedOption={setSelectedOption} selectedOption={selectedOption} />)

    return (
        <div className='p-1 shadow-md relative border-teal-300 border-2 rounded-xl shadow-teal-100 flex gap-x-2'>
            <span id="FilterActive" className="absolute w-[10rem] bg-teal-200 rounded-xl h-[2.5rem] -z-10 transition-all duration-300"></span>
            {bookingFilterOptions}
        </div>
    )
}

export default SegmentedFilter