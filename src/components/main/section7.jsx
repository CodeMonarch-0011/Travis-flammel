import "../../style/main.css"
import img1 from "/images/flammel (2).jpeg"



export function Section7 () {
    return (
        <section className="section-2 section-7">
            <div className="section-2-img">
                <img src={img1} alt="zak-image" className="align-image" />
                <div className="image-after" />
            </div>

            <div className="section-2-cnt">
                <div className="section-2-header">
                    <span>Entrepreneurial Ventures: </span>
                    <span>Brewing Success</span>
                </div>
                
                <div className="section-2-body"> In 2022, Travis ventured into the business world by co-founding his own beer brand, Travla, alongside MasterChef Australia winner Andy Allen and former Essendon Football Club CEO Xavier Campbell. The brand reflects Travis’s appreciation for quality craftsmanship and his Australian heritage. </div>
            </div>
        </section>
    )
}