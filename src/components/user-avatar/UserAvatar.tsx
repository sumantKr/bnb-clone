"use client"
import { useToggle } from '@/hooks'
import { MenuOutlined } from '@ant-design/icons'
import { Avatar, Card, Menu, MenuProps, Tooltip } from 'antd'
import { ItemType, MenuItemGroupType, MenuItemType } from 'antd/es/menu/hooks/useItems'
import CustomButton from '../custom-button/CustomButton'



function UserAvatar() {

  const [collapsed, toggleMenu] = useToggle(true)

  return (
    <div className='relative rounded-xl py-1 px-2  border-[1px] cursor-pointer hover:bg-teal-50 transition-colors duration-300 border-teal-100 flex items-center justify-between w-[5rem]'>
      <Tooltip title="helllo" arrow={false} >
        <MenuOutlined className='text-teal-200 text-2xl p-0' />
      </Tooltip>

      < Avatar />
    </div>
  )
}

export default UserAvatar