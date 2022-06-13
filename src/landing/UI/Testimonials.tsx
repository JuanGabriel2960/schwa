import { testimonialsCard } from '../data'
import { TestimonialsCard } from '../components/TestimonialsCard';

export const Testimonials = () => {
    return (
        <div className='bg-font-strong py-6 px-6 lg:py-16 lg:px-12 flex flex-col lg:items-center gap-4 lg:gap-9'>
            <h2 className='text-white font-bold text-3xl lg:text-5xl text-justify'>What People Say About Us</h2>
            <p className='text-2xl text-justify lg:max-w-3xl text-font-light lg:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tincidunt ex, nec auctor tellus. Cras sagittis at tortor vel dictum.</p>
            <div className='flex justify-center gap-8 lg:gap-16 my-4 flex-wrap'>
                {
                    testimonialsCard.map(({ image, title, description, name, position, stars }) => (
                        <TestimonialsCard key={name} image={image} title={title} description={description} name={name} position={position} stars={stars} />
                    ))
                }
            </div>
        </div>
    )
}
