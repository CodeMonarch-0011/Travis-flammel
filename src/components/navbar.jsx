import "../style/components.css"
import { AiOutlineMenu } from "react-icons/ai";
import { openMail } from "../utils/mailer";

export function Navbar ({ setSliderOpen, openSlider, setContactOpen }) {
    return (
        <div className="navbar">
           <span onClick={() => setSliderOpen(true)}>  
            {
                !openSlider
                ?
                <AiOutlineMenu />
                :
                <></>
            }
            </span>

            <span className="navbar-logo"> Travis Flammel </span>

            <button className="button" onClick={() => setContactOpen(true)}>
                Contact Us
            </button>

        </div>
    )
}