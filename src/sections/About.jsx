import React, { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { useScrollReveal } from "../hooks/useScrollReveal";

const About = () => {
  const grid2Container = useRef();
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1, once: true });

  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading ">About Me</h2>
      <div
        ref={sectionRef}
        className={`grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12 scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Grid 1 */}
        <div
          className="flex items-end 
        grid-default-color grid-1"
        >
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] 
            md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi I'm Suvit</p>
            <p className="subtext">
              I am a passionate software developer with a strong foundation in computer science (look at this pofolio 
              website )
              and i like to work on new kinda of project and explore new technologies to expand my skills 
              and like to solve many kind of problem which are faced by world 
              
            </p>
          </div>
          <div
            className="absolute inset-x-0 pointer-events-none 
          -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"
          />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              Suvit Skills
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Python"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Networking"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "75%" }}
              text="Nextjs"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="AWS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
       
       {/* Grid 3 */}
<div className="grid-black-color grid-3">
  <div className="flex flex-col md:flex-row items-center justify-between h-full gap-4">

    {/* Text */}
    <div className="w-full md:w-1/2 z-10">
      <p className="headtext">Time Zone</p>

      <p className="subtext">
        My native is Udupi and currently I live in Bangalore.
        I would love to work from anywhere on Earth.
        I enjoy traveling, exploring new places, and meeting new people.
      </p>
    </div>

    {/* Globe */}
    <div className="w-full md:w-1/2 flex justify-center items-center">
      <Globe className="w-40 h-40 sm:w-56 sm:h-56 md:w-full md:h-full" />
    </div>

  </div>
</div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-5 size-full">
            <p className="text-center headtext">
              Do You want to Start a Project Together?
              <CopyEmailButton />
            </p>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-1 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in Network,Netwok Security,ui,ux,web development
            </p>
          </div>

          <div
            className="absolute inset-y-0 md:inset-y-9 
            w-full h-full start-[50%] md:scale-125"
          >
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
