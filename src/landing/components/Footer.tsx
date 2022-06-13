import { footerMedias } from '../data/index';

export const Footer = () => {
    return (
        <div className='bg-white text-font-strong py-6 px-6 lg:py-12 lg:px-12'>
            <footer className='flex flex-col items-center container mx-auto gap-5 lg:flex-row lg:justify-between lg:items-end'>
                <h5 className='hidden lg:block'>© 2022 Juan López</h5>
                <div className='flex flex-col justify-center items-center gap-5 lg:gap-9'>
                    <img src="/logo-small.png" alt="logo" />
                    <div className="text-center cursor-pointer lg:flex lg:gap-10">
                        <h5>Terms of Service</h5>
                        <h5>Privacy Policy</h5>
                        <h5>Security</h5>
                        <h5>Sitemap</h5>
                    </div>
                    <div className='flex items-center gap-5'>
                        {
                            footerMedias.map(({ icon, href }) => (
                                <a key={icon} href={href} target="_blank" rel="noreferrer" >
                                    <img src={icon} alt="media" />
                                </a>
                            ))
                        }
                    </div>
                </div>
                <h5>All rights reserved</h5>
            </footer>
        </div>
    )
}
