import React from 'react'

const Avatar = ({children ,backgroundColor,padding,color,borderRadius,fontSize,textAlign,cursor}) => {
    const style = {
        backgroundColor:backgroundColor,
        padding:`${py}` `${px}`,
        color:color||'blue',
        borderRadius,
        fontSize,
        textAlign:"center",
        cursor:cursor||null,
        textDecoration:"none"
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Avatar