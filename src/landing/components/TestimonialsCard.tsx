
export interface Props {
    image: string;
    title: string;
    description: string;
    name: string;
    position: string;
    stars: number
}

export const TestimonialsCard = ({ image, title, description, name, position, stars }: Props) => {
    return (
        <div className='border flex flex-col gap-6 lg:flex-row w-full items-center p-6 lg:w-200 shadow-lg rounded-xl' style={{ borderColor: '#D4EDF3' }}>
            <img className="w-80 rounded-xl" src={image} alt='testimonials' />
            <div className="flex flex-col gap-6 lg:gap-12">
                <div>
                    {[...Array(stars)]?.map((e, i) => <span className="text-yellow-300 text-3xl" key={i}>★</span>)}
                </div>
                <div>
                    <h4 className='text-white font-bold text-2xl lg:text-4xl'>{title}</h4>
                    <p className='text-2xl text-font-light my-3'>{description}</p>
                </div>
                <div>
                    <h5 className='text-white text-xl lg:text-3xl'>{name}</h5>
                    <span className="text-2xl text-font-light">{position}</span>
                </div>
            </div>
        </div>
    )
}
