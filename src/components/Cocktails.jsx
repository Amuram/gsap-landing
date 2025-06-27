import { cocktailLists, mockTailLists } from "../constants/index.jsx"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Cocktails = () => {

    useGSAP(() => {
       const parallaxTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#cocktails",
            start: "top 30%",
            end: "bottom 80%",
            scrub: true,
        }
       })

       parallaxTimeline
       .from("#c-left-leaf", {x: -100, y: 100})
       .from("#c-right-leaf", {x: 100, y: 100}) 
    }, [])
    return (
        <section id="cocktails" className="noisy">
            <img src="/images/cocktail-left-leaf.png" id="c-left-leaf" alt="left-leaf" />
            <img src="/images/cocktail-right-leaf.png" id="c-right-leaf" alt="right-leaf" />
        
            <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails</h2>

                    <ul>
                        {
                            cocktailLists.map((item) => (
                                <li key={item.id}>
                                    <div  className="md:me-28">
                                        <h3>{item.name}</h3>
                                        <p>{item.country} | {item.details}
                                        </p>
                                        
                                    </div>
                                    <span>{item.price}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most loved cocktails</h2>

                    <ul>
                        {
                            mockTailLists.map((item) => (
                                <li key={item.id}>
                                    <div  className="me-28">
                                        <h3>{item.name}</h3>
                                        <p>{item.country} | {item.details}
                                        </p>
                                        
                                    </div>
                                    <span>{item.price}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cocktails
