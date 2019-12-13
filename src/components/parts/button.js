import React from 'react'
import style from './button.module.scss'
import clsx from 'clsx'

export default function Button({children}) {

     
    return (
        <button 
            className={clsx({
                [style.button]: true
            })}
        >
            {children}
        </button>
    )
}
