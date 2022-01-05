import React from 'react'
import '../css/SideRow.css';
function SideRow({ title, Icon, selected }) {
    const sideRowClass = `siderow ${selected ? 'selected' : ''}`.trim();
    return (
        <div className={sideRowClass}>
            {/* Second way to do it is:{selected && 'selected'}
        where && means then */}
            <Icon className='siderow__icon' />
            <div className='siderow__title'>
                {title}
            </div>
        </div >
    )
}

export default SideRow

