import "../../style/main.css"
import img1 from "/images/flammel (5).jpeg"


export function Section6 () {
    return (
        <section className="section-1">
            <div className="section-1-img">
                <img src={img1} alt="zak-image" className="align-image" />
                <div className="image-after" />
            </div>

            <div className="section-1-cnt">
                <div className="section-1-header">
                    <span>Personal Life:</span>
                    
                    <span>
                        Grounded and Private
                    </span>
                </div>
                
                <div className="section-1-body">
                    Despite his fame, Travis remains grounded and values his privacy. He enjoys activities reminiscent of his upbringing, such as fishing, camping, horse riding, and surfing. Known for his preference for going barefoot, this trait was even incorporated into his character in “Warcraft.” <br />
                    Travis has been linked to several high-profile relationships over the years, including Canadian singer Nicole Appleton, with whom he had a three-year relationship. He has also been associated with actresses Katheryn Winnick, Paula Patton, and model Jessica Miller. However, he tends to keep his personal life out of the spotlight.
                </div>
            </div>
        </section>
    )
}