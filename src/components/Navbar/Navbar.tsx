import { FaLeaf, FaBars } from 'react-icons/fa';
import { menuItems } from '../../data/menuItems';

const Navbar = () => {
  return (
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
            {menuItems.map((menu) => (
              <li key={menu.id} className='text-xl'>
                <a href={menu.url} className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold'>{menu.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Hamburger Menu Section */}
        <div className="block md:hidden">
          <button className="text-2xl text-gray-600">
            <FaBars/>
          </button>
      </div>
      </div>
    </nav>
  )
}

export default Navbar