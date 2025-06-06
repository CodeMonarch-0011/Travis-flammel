import "../../style/main.css"
import { AiFillInstagram } from "react-icons/ai"  
import { FaFacebookSquare, FaImdb } from "react-icons/fa"
import { openMail, openSocial } from "../../utils/mailer"


function Copyright () {
    return (
        <div className="copyright">
            Copyright©2025. All Rights Reserved
        </div>
    )
}

export function Section8 ({ setContactOpen }) {
    return (
        <div className="section-8" id="contact">
            <span className="section-8-header">
                A Legacy of Versatility and Authenticity
            </span>

            <span>
                From his humble beginnings on an Australian farm to becoming a globally recognized actor and entrepreneur, Travis Fimmel’s journey is a testament to his versatility, authenticity, and dedication to his craft. Whether portraying legendary warriors, complex antiheroes, or exploring new business ventures, Travis continues to captivate audiences with his compelling performances and down-to-earth persona.
            </span>

            <button className="button secondary-button" onClick={() => setContactOpen(true)}> Reach Out To Us</button>

            <div className="section-8-contacts">
                <span> <AiFillInstagram /> </span>
                <span> <FaImdb /> </span>
                <span> <FaFacebookSquare /> </span>
            </div>

            <Copyright />
        </div>
    )
}