
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {

  return (
   <div className="flex-center h-[100vh]">
    <h1 className="text-8xl text-fuchsia-800">hello</h1>
   </div>
  )
}

export default App
