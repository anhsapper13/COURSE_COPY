import React, { ReactNode } from 'react'
import {Button} from "antd"
import { ButtonColorType, ButtonShape, ButtonVariantType } from 'antd/es/button'


type ButtonProps = {
    text: string,
    icon?: ReactNode,
    //default = black
    //primary = blue
    //danger = red
    color?:ButtonColorType ,
    shape?:ButtonShape,
    variant?:ButtonVariantType
    onclick?: ()=> void,
    className?: string  
} 
export const ButtonComponent: React.FC<ButtonProps> = ({text,icon,color="default",shape,onclick,variant="solid",className}) => {
  return (
    <Button
        icon={icon}
        color={color}
        shape={shape}
        onClick={onclick}
        variant={variant}
        iconPosition='end'
        className={`p-5 text-lg ${className}`}
    >
        {text}
    </Button>
  )
}

export default ButtonComponent