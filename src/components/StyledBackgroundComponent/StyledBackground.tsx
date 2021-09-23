import React from 'react'
import useStyles from './StyledBackground.styles';

interface StyledBackgroundInterface{
    children: any,
    backgroundImage: any
}

export default function StyledBackground({children}: StyledBackgroundInterface) {
    const classes = useStyles()
    return (
        <div>
            {children}
        </div>
    )
}
