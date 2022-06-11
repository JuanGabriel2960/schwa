import React from 'react'

export interface Props {
    icon: string;
    title: string;
    description: string;
}

export const SkillsCard = ({ icon, title, description }: Props) => {
    return (
        <div className='border w-full lg:w-100 shadow-lg p-6 rounded-xl' style={{ borderColor: '#D4EDF3' }}>
            <img src={icon} />
            <h4 className='text-font-strong my-4 font-bold text-2xl lg:text-3xl'>{title}</h4>
            <p className='text-2xl text-font-light'>{description}</p>
        </div>
    )
}
