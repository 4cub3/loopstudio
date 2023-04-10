import NavBar from "./NavBar";
import Hero from "./Hero";
import { useState } from "react";
const Header = ()=>{
    const [navBar, setNavBar] = useState(null);
    const pTop = (navBar)=>{
        setNavBar(navBar)
    }
    return(
        <section className={`bg-image w-full  pb-4 ${!navBar ? 'pt-12 ' : 'pt-0 sm:pt-12'}`}>
            <NavBar pTop={pTop}/>
            <Hero/>
        </section>
      
    )
}
export default Header