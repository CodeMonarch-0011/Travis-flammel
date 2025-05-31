import "../../style/main.css"
import { openMail } from "../../utils/mailer"
import travis from "/images/travis-flammel-bck.png"

export function Banner({ setContactOpen }) {
    return (
        <section className="main-page-banner" id="home">
            <div className="main-page-banner-content">
                <div className="main-page-banner-header">
                    Travis Fimmel:
                </div>

                <span>From Australian Farmlands to Hollywood’s Epic Sagas</span>

                <button className="button" onClick={() => setContactOpen(true)}>
                    Get in Touch
                </button>
            </div>

            <div className="main-page-banner-bck-img">
                <img src={travis} alt="travis-fimmel" />
            </div>


        </section>
    )
}