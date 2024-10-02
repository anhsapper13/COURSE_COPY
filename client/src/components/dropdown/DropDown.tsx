import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import {Dropdown,Space} from "antd"
import { NavLink } from 'react-router-dom'

const items:MenuProps["items"] = [
    {
        label: <NavLink to={"/sharpen-skill"}>Sharpen your skills</NavLink>,
        key:"0"
    },
    {
        label: <NavLink to={"/change-careers"}></NavLink>,
        key:"0"
    },
    {
        label: <NavLink to={"/sharpen-skill"}>Sharpen your skills</NavLink>,
        key:"0"
    },
    {
        label: <NavLink to={"/sharpen-skill"}>Sharpen your skills</NavLink>,
        key:"0"
    },
]

const DropDown = () => {
  return (
    <div>DropDown</div>
  )
}

export default DropDown