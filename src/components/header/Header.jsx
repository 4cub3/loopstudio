import NavBar from "./NavBar";
import Hero from "./Hero";
const Header = ()=>{
    return(
        <section className="bg-image w-full pt-12 pb-4">
            <NavBar />
            <Hero/>
        </section>
      
    )
}
export default Header