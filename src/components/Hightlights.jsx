import { useGSAP } from "@gsap/react"
import { rightImg, watchImg } from "../utils"
import gsap from "gsap"
import VideoCarousel from "./VideoCarousel"
const Hightlights = () => {
  useGSAP(() => {

    gsap.to("#title", {opacity: 1, y:0,
      backgroundColor: "gray", 
      height: "100px" 
    })
    gsap.to(".link", {opacity: 1, y:0, duration: 1,stagger: 0.25     
    })
  },[])
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">Hightlights
     <div className="screen-max-width">
      <div className="flex justify-center items-center">
        
        <div className="flex flex-wrap items-end gap-5">
          <p className="link">watch the film
            <img src={watchImg} className="ml-2"/>
          </p>
        </div>
        <div className="flex flex-wrap items-end gap-5">
          <p className="link ml-5">watch the film
            <img src={rightImg} className="ml-2"/>
          </p>

        </div>
      </div>
   <VideoCarousel />
     </div>
    </section>
  )
}

export default Hightlights