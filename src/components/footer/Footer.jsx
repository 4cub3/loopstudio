import logo from '../../store/images/logo.svg'
import facebook from '../../store/images/icon-facebook.svg';
import twitter from '../../store/images/icon-twitter.svg';
import pinterest from '../../store/images/icon-pinterest.svg';
import instagram from '../../store/images/icon-instagram.svg';
const Footer = ()=>{
    return(
        <section className="container text-white max-w-6xl mx-auto px-6  pt-10 pb-24 flex flex-col space-y-5 md:space-y-0 items-center md:flex-row md:justify-between">
            <div className="space-y-4">
                <figure>
                    <img src={logo} alt="logo" />
                </figure>
                <ul className="list-none flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <li>About</li>
                    <li>Careers</li>
                    <li>Products</li>
                    <li>Support</li>
                    <li>Events</li>
                </ul>
            </div>
            <div className="space-y-4 flex flex-col items-center md:items-start ">
                <figure className='space-x-4 flex'>
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={pinterest} alt="pinterest" />
                    <img src={instagram} alt="ig" />
                </figure>
                <p className='text-gray-400 text-center md:text-left'>© 2022 Loopstudios. All Rights Reserved</p>
            </div>
        </section>

    )
}
export default Footer;