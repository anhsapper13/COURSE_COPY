import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import {Dropdown,Space} from "antd"
import ButtonComponent from '../button/button'
import { DownOutlined } from '@ant-design/icons'


const DropDown  = () => {
    const [selectedDropdown, setSelectedDropDown] = useState<string>("Sharpen your skills")
    const handleClick : MenuProps["onClick"] = (e)=>{
        setSelectedDropDown(e.key)
    }
    const items:MenuProps["items"] = [
        {
            label:"Sharpen your skills",
            key:"Sharpen your skills",
        },
        {
            label: "Change careers",
            key:"Change careers"
        },
        {
            label:"Level up as a leader",
            key:"Level up as a leader"
        },
        {
            label:"Earn a degree",
            key:"Earn a degree"
        },
    ]
  return (
   <Dropdown menu={{items, onClick:handleClick}} trigger={['click']}  >
    <a onClick={(e)=> e.preventDefault()}>
        <ButtonComponent text={selectedDropdown} className='!text-white !py-4 !font-medium !text-sm rounded-none !remove-border !w-full !bg-[#1F453D]' icon={<DownOutlined/>} />
    </a>
   </Dropdown>
  )
}

export default DropDown