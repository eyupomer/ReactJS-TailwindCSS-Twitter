import React from 'react'

const SideLink = ({ name, Icon, active, onMenuItemClick }) => {
    const isActive = active === name;
    return (
        <li className='group cursor-pointer' onClick={() => onMenuItemClick(name)}>
            <a href={name.toLowerCase()} className='block pointer-events-none  text-lg mb-2'>
                <div className='inline-block'>
                    <div className={`flex items-center pl-3 pr-8 py-3 group-hover:bg-primary-light group-hover:text-primary-base rounded-full
                    ${isActive ? "text-primary-base" : ""}
                    `}>
                        <Icon />
                        <span className='ml-4 font-bold'>{name}</span>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default SideLink