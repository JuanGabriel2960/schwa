import { navbarLinks } from '../data'
import { useNavbar } from '../../shared/hooks/useNavbar';

export const Navbar = () => {

  const { showNavbar, toggleNavbar, closeNavbar } = useNavbar()

  return (
    <ul className='flex justify-between items-start'>
      <h3 className='text-font-strong font-bold text-4xl'><span className='text-accent'>S</span>chwa</h3>

      <span className='font-bold text-4xl z-20 cursor-pointer lg:hidden' onClick={toggleNavbar}>{showNavbar ? '✖' : '☰'}</span>

      <div className={`bg-accent h-screen w-screen fixed top-0 z-10 flex flex-col gap-6 justify-center items-center lg:bg-transparent lg:static lg:h-auto lg:w-auto lg:flex-row lg:gap-12 ${showNavbar ? 'left-0' : '-left-full'}`} style={{ transition: "all 0.8s cubic-bezier(0.86, 0, 0.07, 1)" }}>
        {
          navbarLinks.map(({ text, href }) => (
            <li key={href} className='text-white lg:text-font-strong cursor-pointer font-medium text-4xl lg:text-2xl' onClick={closeNavbar}><a href={href}>{text}</a></li>
          ))
        }
      </div>
    </ul>
  )
}
