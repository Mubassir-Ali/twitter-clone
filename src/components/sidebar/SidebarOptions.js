import React from 'react'
import './SidebarOptions.css'

function SidebarOptions({text,Icon,active}) {
    return (
        <div className={`sidebar_options ${active && 'sidebar_options_active'}`}>
        <Icon/>
       
        <h2 className='sidebar__text'>{text}</h2>
            
        </div>
    )
}

export default SidebarOptions
