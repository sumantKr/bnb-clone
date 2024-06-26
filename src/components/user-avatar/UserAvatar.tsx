"use client"
import { useToggle } from '@/hooks'
import { MenuOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import classNames from 'classnames'
import { CustomCard, RegisterModal } from '..'



function UserAvatar() {

  const [collapsed, toggleMenu] = useToggle(true)

  const [isOpen, setIsOpen] = useToggle(false)
  return (
    <div className='relative rounded-xl py-1 px-2  border-[1px] cursor-pointer hover:bg-teal-50 transition-colors duration-100 border-teal-100 flex items-center justify-between w-[5rem]'>
      <MenuOutlined className='text-teal-200 text-2xl p-0' onClick={toggleMenu} />
      < Avatar />
      {
        <div className={classNames("absolute top-[125%] right-0 w-32 flex flex-col justify-around overflow-hidden transition-[height] duration-700", { "h-24": !collapsed, "h-0": collapsed })}>
          <CustomCard classNames={{ body: "!p-2" }}>Login</CustomCard>
          <CustomCard onClick={setIsOpen} classNames={{ body: "!p-2" }}>Sign up</CustomCard>
        </div>
      }
      <RegisterModal open={isOpen} onCancel={setIsOpen}/>
    </div>
  )
}

export default UserAvatar