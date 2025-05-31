import img1 from "/images/flammel (6).jpeg"
import "../../style/main.css"

//  

// 

export function Section3 () {
    return (
        <section className="section-1">
            <div className="section-1-img">
                <img src={img1} alt="zak-image" className="align-image" />
                <div className="image-after"/>
            </div>

            <div className="section-1-cnt">
                <div className="section-1-header">
                    <span>Transition to Acting: </span>
                    <span>Embracing the Silver Screen</span>
                </div>
                
                <div className="section-1-body">
                    Eager to expand his creative horizons, Travis transitioned into acting, studying under renowned acting coach Ivana Chubbuck. His acting debut came in 2003 with the lead role in The WB’s series “Tarzan,” where he performed most of his own stunts. Although the show had a brief run, it showcased his potential as a leading man. <br />

                    Over the next few years, Travis appeared in various film and television projects, including “Restraint” (2008), “Surfer, Dude” (2008), and “The Experiment” (2010). These roles allowed him to hone his craft and demonstrate his versatility as an actor.
                </div>
            </div>
        </section>
    )
}