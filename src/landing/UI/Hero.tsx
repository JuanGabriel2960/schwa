import { Button } from '../../shared/components/Button'
import { hero } from '../assets';
import { Navbar } from '../components/Navbar'
import { heroStatistics } from '../data/index';

export const Hero = () => {
    return (
        <div className='bg-secondary py-6 px-6 lg:py-12 lg:px-12'>
            <div className='container mx-auto'>
                <Navbar />
                <div className='flex items-center justify-between mt-12 mb-1 lg:mt-20 lg:mb-6'>
                    <div className='lg:w-1/3'>
                        <div className='flex flex-col gap-6 lg:gap-14'>
                            <h1 className='text-font-strong font-bold text-4xl lg:text-6xl'>Learn English From <br />The Comfort of Your Home</h1>
                            <p className='text-2xl text-justify lg:text-left text-font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id tincidunt ex, nec auctor tellus. Cras sagittis at tortor vel dictum. Morbi massa erat, posuere non accumsan ut, ultricies quis ante.</p>
                            <div>
                                <Button text='Explore Course' />
                            </div>
                        </div>
                        <div className='flex justify-between mt-12 lg:mt-20'>
                            {
                                heroStatistics.map(({ count, text }) => (
                                    <div key={text} className='text-center'>
                                        <h3 className='text-font-strong font-bold text-3xl'>{count}</h3>
                                        <span className='text-xl text-font-light'>{text}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='hidden lg:block lg:w-3/5'>
                        <img src={hero} alt="hero" />
                    </div>
                </div>
            </div>
        </div>
    )
}