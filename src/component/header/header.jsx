import H1 from "../title/title"
import A from "../a/a"
import { Li, Ul } from "../ul/ul"

const Header = ()=>{
    return(
        <header>
            <H1 contentH1={<A Href="#" ContentA="Hobed Bayekula"/>}/>

            <Ul className="Menu" contentUl1={ <Li className="link link--home" contentLi={<A Href="#Home" ContentA="Home"/>}/>} 
                                 contentUl2={ <Li className="link link--about" contentLi={<A Href="#About" ContentA="About me"/>}/>}
                                 contentUl3={ <Li className="link link--services" contentLi={<A Href="#Services" ContentA="My services"/>}/>}
                                 contentUl4={ <Li className="link link--contact" contentLi={<A Href="#Contact" ContentA="Contact Me"/>}/>}  
            ></Ul>
        </header>
    )

}
export default Header;