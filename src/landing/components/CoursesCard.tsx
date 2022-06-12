import React from 'react'

export interface Props {
    image: string;
    title: string;
    description: string;
    units: number;
}

export const CoursesCard = ({ image, title, description, units }: Props) => {
    return (
        <div className='border w-full overflow-hidden lg:w-100 shadow-lg rounded-xl' style={{ borderColor: '#D4EDF3' }}>
            <img src={image} />
            <div className='p-6'>
                <div className='flex justify-between items-center'>
                    <h4 className='text-font-strong font-bold text-2xl lg:text-3xl'>{title}</h4>
                    <span>{units} units</span>
                </div>
                <p className='text-2xl text-font-light my-3'>{description}</p>
            </div>
        </div>
    )
}
