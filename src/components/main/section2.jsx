import "../../style/main.css"
import img1 from "/images/flammel (7).jpeg"

 
export function Section2 () {
    return (
        <section className="section-2" id="modelling">
            <div className="section-2-img">
                <img src={img1} alt="zak-image" />
                <div className="image-after"/>
            </div>

            <div className="section-2-cnt">
                <div className="section-2-header">
                    <span>Modeling Breakthrough:</span>
                    <span>From Gym Floors to Global Billboards</span>
                </div>
                
                <div className="section-2-body">
                    Travis’s foray into modeling began serendipitously when he was spotted by a talent scout while working out at a gym in Melbourne. This chance encounter led him to Los Angeles, where he signed with LA Models in 2002. His rugged good looks and charismatic presence quickly caught the attention of fashion industry giants. <br />

                    In a groundbreaking move, Travis became the first male model to secure a six-figure deal to model exclusively for Calvin Klein for a year. He fronted campaigns for the brand’s Crave fragrance and iconic underwear line, becoming a household name and gracing the covers of magazines like Esquire, TV Guide, and Numero Homme.
                </div>
            </div>
        </section>
    )
}