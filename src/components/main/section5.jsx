import "../../style/main.css"
import img1 from "/images/flammel (8).jpeg"


export function Section5 () {
    return (
        <section className="section-2">
            <div className="section-2-img">
                <img src={img1} alt="zak-image" className="align-image" />
                <div className="image-after" />
            </div>

            <div className="section-2-cnt">
                <div className="section-2-header">
                    <span></span>
                    
                    <span>
                        Recent Projects and Continued Success
                    </span>
                </div>
                
                <div className="section-2-body">
                    Travis’s recent work includes starring roles in the CIA thriller “Kandahar” (2023) alongside Gerard Butler and the western film “Rust,” where he plays bounty hunter Fenton “Preacher” Lang. He also appeared in the Stan Original mini-series “Black Snow,” earning a nomination for Best Lead Actor in a Drama at the 2024 AACTA Awards. In 2025, he reprised his role in the second season of “Black Snow,” even directing an episode. <br />
                    Additionally, Travis is set to appear in the upcoming series “Dune: Prophecy,” portraying the mysterious soldier Desmond Hart, further cementing his place in the realm of science fiction and fantasy
                </div>
            </div>
        </section>
    )
}