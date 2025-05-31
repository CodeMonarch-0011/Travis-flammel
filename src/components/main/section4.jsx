import "../../style/main.css"
import img1 from "/images/flammel (4).jpeg"
import img2 from "/images/flammel (3).jpeg"
import img3 from "/images/flammel (10).jpeg"


function Section4Card ({ img, text }) {
    return (
        <div className="section-4-card">
            <div>
                <img src={img} />
            </div>

            <span>{text}</span>
        </div>
    )
}

export function Section4 () {
    return (
        <section className="section-4" id="adventures">
            <div className="section-4-header">
                <span>Diverse Roles:</span>
                <span>Exploring New Frontiers</span>
            </div>

            <div className="section-4-cnt">
                Following his success on “Vikings,” Travis took on a variety of roles across different genres. <br /> 
            </div>

            <div className="section-4-list">
                <Section4Card text="In 2016, he starred as Anduin Lothar in the fantasy film “Warcraft,” based on the popular video game franchise." img={img1} />
                <Section4Card text="He continued to showcase his range with performances in “Maggie’s Plan”, and in the year 2019 “Danger Close: The Battle of Long Tan”" img={img2} />
                <Section4Card text="In 2020, Travis returned to television with a leading role in HBO Max’s science fiction series “Raised by Wolves,” produced by Ridley Scott. " img={img3} />
            </div>

        </section>
    )
}