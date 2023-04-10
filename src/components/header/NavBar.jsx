import logo from '../../store/images/logo.svg';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai'
const NavBar = ()=>{
    return(
        <nav className="container max-w-6xl mx-auto px-6 flex  sm:flex-row items-center justify-between">
            <figure className='w-3/12'>
                <img src={logo} alt="logo" />
            </figure>
            <ul className='list-none flex w-0 overflow-hidden h-0 sm:w-auto sm:h-auto flex-col sm:flex-row text-white sm:space-x-4 font-serif font-semibold'>
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
            </ul>
                <div className='text-white sm:hidden'> <FaBars/> <AiOutlineClose className={`hidden`}/></div>
        </nav>
    )
}
export default NavBar;