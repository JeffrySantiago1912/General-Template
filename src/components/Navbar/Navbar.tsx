import { useEffect, useState } from 'react';
import { FaLeaf } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { DataMenu } from '../../data/DataMenu';
import ResponsiveMenu from '../ResponsiveMenu';

const Navbar = () => {

  const [open, setOpen] = useState(false);  
  
  // Función para cerrar el menú si la pantalla es mayor a 768px (breakpoint md)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 767) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <nav>
      <div className="container flex items-center justify-between py-4 md:pt-4">
        {/* Logo Section */}  
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
          <p className='text-primary'>Fruit</p>
          <p className='text-secondary'>Store</p>
          <FaLeaf className='text-green-500'/>
        </div>
        {/* Menu Section */}  
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {DataMenu.map((menu) => (
              <li key={menu.id} className='text-xl'>
                <a href={menu.url} className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>{menu.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Hamburger Menu Section */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <MdMenu className='text-4xl'/>
       </div>
      </div>
    </nav>

    {/* Mobile Menu */}
    <ResponsiveMenu open={open}/>
    </>
  )
};

export default Navbar