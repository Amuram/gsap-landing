import { useGSAP } from "@gsap/react"
import { navLinks } from "../constants/index.jsx"
import gsap from "gsap"
const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",
                end: "bottom top",
                scrub: 1,
            },
        })
        navTween.fromTo("nav", {
            backgroundColor: "transparent"

        }, {
            backgroundColor: "#00000050",
            backdropFilter: "blur(10px)",
            duration: 1,
            ease: "power3.out",
        })
    },[])
    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2 cursor-pointer">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <a href={item.href} className="cursor-pointer">{item.title}</a>
                        </li>
                    ))}
                </ul>
                
            </div>
        </nav>
    )
}

export default Navbar