import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState, useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  // 監聽螢幕寬度變化
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 760) {
        setVideoSrc(smallHeroVideo);
      } else {
        setVideoSrc(heroVideo);
      }
    };

    // 加入事件監聽器
    window.addEventListener("resize", handleResize);

    // 清理事件監聽器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // GSAP 動畫
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
  }, []);

  useGSAP(() => {
    gsap.to("#cta",{opacity:1, y:-50,  delay: 1.5 })
  }

  )
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iphone </p>
        <div className="md:w-10/12 w-9/12">
          <video autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="cta"
      className="flex flex-col items-center opacity-0 translate-y-20">
    <a href="#highlights" className="btn">購買</a>
    <p className="font-normal text-xl">$300</p>
       </div> 
    </section>
  );
};

export default Hero;
