import React from 'react'

const SideLink = ({ name, Icon }) => {
    return (
        <li className='group'>
            <a href="/" className='block cursor-pointer text-lg mb-2'>
                <div className='inline-block'>
                    <div className='flex items-center pl-3 pr-8 py-3 group-hover:bg-primary-light group-hover:text-primary-base rounded-full'>
                        <Icon />
                        <span className='ml-4 font-bold'>{name}</span>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default SideLink