import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* LEFT */}
          <div className='first-project-wrapper' ref={rydeRef}>
            <div className='image-wrapper'>
              <img src="images/project1.png" alt="ryde" />
            </div>
            <div className='text-content'>
              <h2>On-Demand Rides Made Simple with a powerful. User-Friendly App Called Ryde</h2>
              <p>An App built with React Native, Expo & TailwindCSS for a fast, user-friendly experience</p>
            </div>

          </div>

          {/* RIGHT */}
          <div className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={libraryRef}>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src="images/project2.png" alt="Library Management Platform" />
              </div>
              <h2>Library Management Platform</h2>
            </div>

            <div className='project' ref={ycDirectoryRef}>
              <div className='image-wrapper bg-[#ffe7db]'>
                <img src="images/project3.png" alt="YC Directory" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
          
        </div>
      </div>
      
    </section>
  )
}

export default ShowcaseSection
