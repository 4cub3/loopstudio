import { useState } from 'react';
import logo from '../../store/images/logo.svg';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai'
const NavBar = ({pTop})=>{
    const [navBar, setNavBar] = useState(false)
     pTop(navBar)

        return(
        <nav className="container max-w-6xl mx-auto px-6 flex  sm:flex-row items-center justify-between relative">
            <figure className='w-3/12'>
                <img src={logo} alt="logo" />
            </figure>
            <ul className={`list-none flex ${navBar ? 'w-full h-screen bg-black sm:bg-transparent sm:relative fixed top-0 left-0 p-6 text-center z-20 text-3xl space-y-6  items-center justify-center' :'w-0 h-0'} overflow-hidden  sm:w-auto sm:h-auto flex-col sm:flex-row text-white sm:space-x-4 font-serif font-semibold`}>
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
            </ul>
                <button className='text-white sm:hidden ' onClick={()=>{ setNavBar(prev =>(!prev))}}> <FaBars className={`transition-all duration-300 ${navBar ? 'rotate-45 hidden ': 'block '}`}/> <AiOutlineClose className={` transition-all duration-300 ${navBar ? 'block fixed top-4 right-4 z-20': 'hidden rotate-45'}`}/></button>
        </nav>
    )
}
export default NavBar;