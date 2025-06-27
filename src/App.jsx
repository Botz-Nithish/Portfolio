import './App.css'
import { useState, useEffect } from 'react';

import BlobCursor from './components/BlobCursor'
import ProfileCard from './components/ProfileCard'
import nithishImg from './assets/nithish.jpg';
import GooeyNav from './components/GooeyNav'
import DotGrid from './components/DotGrid'
import CardSwap, { Card } from './components/CardSwap'
import GradientText from './components/Text/GradientText';
import ScrambledText from './components/ScrambledText';
import { motion } from "framer-motion";
import ScrollVelocity from './components/Text/ScrollVelocity';
import SpotlightCardGrid from './pages/SpotlightCardGrid';
import gif1 from "./assets/gif1.gif";
import gif2 from "./assets/gif2.gif";
import gif3 from "./assets/gif3.gif";
import ChromaGrid from './components/ChromaGrid';
function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemss = [
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Front End Internship",
      subtitle: "Converted an existing AngularJS application to React.js for Finsol Consultancy private ltd., enhancing performance and maintainability. Implemented Tailwind CSS for styling and Axios for backend API integration.",
      handle: "45 Days",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/sarahjohnson"
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "1st Place – Design Summit",
      subtitle: "Designed a Luxury Fashion Website in Round 1 and a Club Website in the Finals at Rajalakshmi Engineering College.",
      handle: "REC",
      borderColor: "#9333EA",
      gradient: "linear-gradient(145deg, #9333EA, #000)",
      url: "https://example.com/designsummit"
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "2nd Place – Intellexa Web Design",
      subtitle: "Built a dynamic fandom website within 2 hours during the Intra-College Web Design Contest conducted by Intellexa.",
      handle: "REC",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(145deg, #F59E0B, #000)",
      url: "https://example.com/intellexa"
    },
    {
      image: "https://i.pravatar.cc/300?img=4",
      title: "Top 10 – SSN Hackathon",
      subtitle: "Developed a plant disease prediction model using ensemble learning and image recognition; secured a spot in the Top 10.",
      handle: "SSN",
      borderColor: "#EF4444",
      gradient: "linear-gradient(145deg, #EF4444, #000)",
      url: "https://example.com/ssnhackathon"
    }
  ];
  

  useEffect(() => {
    console.log("🌀 Card changed: activeIndex =", activeIndex);
    console.log("🧩 Active title:", active.title);
  }, [activeIndex]);

  const data = [
    {
      title: "NovaVest",
      description: "Award-winning project recognized at my college for its elegant design and user experience. Developed a sophisticated luxury fashion platform focused on an engaging and smooth user experience. The website features a dynamic hero slider, a detailed product catalog, an integrated cart system, and advanced filtering options. These components allow users to effortlessly browse and shop the latest fashion trends. The design emphasizes responsiveness and aesthetics, making it accessible across devices.",
      Tech: "Tech Stack: HTML, CSS, JavaScript",
      gif: gif1,
    },
    {
      title: "Google Scholar Scraper",
      description: "Built a comprehensive academic profile viewer designed to display detailed information about research authors. The platform presents citation counts, co-author networks, and various scholarly metrics for quick and insightful analysis. It supports efficient navigation through academic profiles, helping users evaluate research impact effectively. The project leverages a modern full-stack MERN architecture ensuring scalability and fast data handling. This system provides an intuitive and data-rich user experience for academic communities.",
      Tech: "Tech Stack: MongoDB, Express.js, React.js, Node.js (MERN)",
      gif: gif2,
    },
    {
      title: "Typing Thesis",
      description: "Created an interactive Words Per Minute (WPM) calculator using vanilla JavaScript, featuring customizable themes through CSS for a personalized user interface. The application fetches user performance data from a SQL database and analyzes typing speed and accuracy. Results are visually represented using histograms to help users track their progress over time. This project combines front-end interactivity with back-end data management and visualization. It highlights skills in native JavaScript programming and data analysis.",
      Tech: "Tech Stack:  JavaScript, CSS, SQL",
      gif: gif3,
    },
  ];

  const active = data[activeIndex];

  const items = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#" },
    { label: "SKILLS", href: "#" },
    { label: "ACHIEVEMENTS", href: "#" },
    { label: "PROJECTS", href: "#" },
    { label: "CERTIFICATIONS", href: "#" },
    { label: "CONTACT", href: "#" },
  ];


  return (
    <div className="min-h-screen w-full m-0 p-0">
      <div style={{ width: '100%', height: '610vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }} className='bg-black'>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="rgba(59,53,53,0.8)"
          activeColor="#00FFFF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>


      <BlobCursor
        blobType="circle"
        fillColor="#00FFFF"
        trailCount={3}
        sizes={[30, 30, 60]}
        innerSizes={[20, 35, 25]}
        innerColor="rgba(255,255,255,0.8)"
        opacities={[1.0, 0.6, 0.6]}
        shadowColor="rgba(0,0,0,0.75)"
        shadowBlur={5}
        shadowOffsetX={10}
        shadowOffsetY={10}
        filterStdDeviation={30}
        useFilter={true}
        fastDuration={0.1}
        slowDuration={0.5}
        zIndex={100}
      />

      <div className="fixed font-mono mt-12 top-0 left-1/2 transform -translate-x-1/2 z-50">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      <div className="container   flex justify-between items-center min-h-screen ">
        <div className="text-white flex flex-col">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="text-8xl font-mono"
          >
            Nithish Rao P
          </GradientText>
          <div className='flex item-center'>
            <ScrambledText
              className="scrambled-text-demo  ml-32  text-3xl"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars={"."}
            >
              I'm a passionate software engineer with expertise in modern web technologies.
            </ScrambledText>
          </div>
          <ScrambledText
            className="scrambled-text-demo ml-32 text-3xl"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars={"."}
          >
            Let's create something amazing together!
          </ScrambledText>
        </div>
        <div className="w-1/3 flex justify-end ">
          <ProfileCard
            name="Nithish Rao P"
            title="Software Engineer"
            handle="Nithish Rao P"
            status="Ready To Work"
            contactText="Contact Me"
            avatarUrl={nithishImg}
            className="object-cover h-full"
            showBehindGradient={false}
            innerGradient="linear-gradient(45deg, rgba(0,255,255,0.25) 0%, rgba(0,255,255,0.15) 25%, rgba(0,255,255,0.25) 50%, rgba(0,255,255,0.15) 75%, rgba(0,255,255,0.25) 100%)"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
          />
        </div>

      </div>
      <div className="">
        <ScrollVelocity
          texts={['Mastery']}
          velocity={100}
          className=" outlined-text text-red font-mono"
        />
        <SpotlightCardGrid />

      </div>
      <div className="mt-10">
        <ScrollVelocity
          texts={['Projects']}
          velocity={100}
          className="text-white outlined-text font-mono"
        />
        <div className="w-full h-[90vh] relative flex items-start justify-start p-6 text-white">
          {/* Left: Title + Description */}
          <div className="w-1/2 z-10 flex flex-col mt-24 items-center  justify-center">
            <motion.div
              key={activeIndex} // triggers animation on index change
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-mono text-center font-bold mb-4">{active.title}</h1>
              <p className="text-lg font-mono text-center mt-12">{active.description}</p>
              <p className="text-lg font-mono text-center mt-12">{active.Tech}</p>
            </motion.div>

          </div>

          {/* Right: CardSwap absolutely positioned */}
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 mt-32 w-full">
            <CardSwap
              cardDistance={60}
              verticalDistance={20}
              delay={6000}
              easing="linear"
              pauseOnHover={false}
              onCardChange={(index) => {
                console.log("✅ onCardChange fired with index:", index);
                setActiveIndex(index);
              }}
            >
              {data.map((item, index) => (
                <Card key={index}>
                  <div className="flex flex-col w-full h-full rounded-xl overflow-hidden shadow-lg bg-[#1e1e1e] border border-gray-700">

                    {/* Browser-style Top Bar */}
                    <div className="flex items-center px-3 py-1 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-cyan-700 to-black   border-b border-gray-600">
                      {/* Browser dots */}
                      <div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
                      {/* Tab title */}
                      <span className="text-sm text-white font-medium truncate">{item.title}</span>
                    </div>

                    {/* Full-screen GIF */}
                    <div className="flex-1 w-full h-full">
                      <img
                        src={item.gif}
                        alt="Content"
                        className="w-full h-full object-cover"
                      />
                    </div>

                  </div>
                </Card>

              ))}
            </CardSwap>
          </div>
        </div>


        <ScrollVelocity
          texts={['Achievements / Experience']}
          velocity={100}
          className=" outlined-text font-mono"
        />
        <div style={{ position: 'relative' }}>
          <ChromaGrid
            items={itemss}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>

      </div>

    </div >
  )
}

export default App
