"use client"
import { useToggle } from '@/hooks'
import { MenuOutlined } from '@ant-design/icons'
import { Avatar, Menu, MenuProps } from 'antd'
import { ItemType, MenuItemGroupType, MenuItemType } from 'antd/es/menu/hooks/useItems'
import CustomButton from '../custom-button/CustomButton'



function UserAvatar() {

  const [collapsed, toggleMenu] = useToggle(true)

  return (
    <div className='rounded-xl p-1  border-0 border-teal-100 flex items-center justify-end '>
      <CustomButton />
      < Avatar />
    </div>
  )
}

export default UserAvatar