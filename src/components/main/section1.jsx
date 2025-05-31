import "../../style/main.css"
import img1 from "/images/flammel (11).jpeg"

export function Section1 () {
    return (
        <section className="section-1" id="story">
            <div className="section-1-img">
                <img src={img1} alt="zak-image" />
                <div className="image-after"/>
            </div>

            <div className="section-1-cnt">
                <div className="section-1-header">
                    <span>Humble Beginnings</span>
                    <span>The Roots of a Star</span>
                </div>
                
                <div className="section-1-body">
                    Born on July 15, 1979, near Echuca, Victoria, Australia, Travis Fimmel was the youngest of three brothers raised on a 5,500-acre dairy and cattle farm in Lockington. His mother, Jennie, worked as a recreation officer for the disabled, while his father, Chris, managed the family’s farming operations. Growing up amidst the rugged landscapes of rural Australia, Travis developed a deep appreciation for hard work, nature, and simplicity. <br />
                    An aspiring athlete, Travis moved to Melbourne in his late teens with dreams of playing professional Australian rules football for the St Kilda Football Club. However, a broken leg sidelined his athletic ambitions. Undeterred, he enrolled at RMIT University to study architecture but eventually deferred his studies to travel abroad, seeking new experiences and opportunities. 
                </div>
            </div>
        </section>
    )
}