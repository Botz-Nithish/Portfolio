import './App.css'
import { useState } from 'react';

import BlobCursor from './components/BlobCursor'
import ProfileCard from './components/ProfileCard'
import nithishImg from './assets/nithish.jpg';
import reactImg from './assets/react.svg';
import GooeyNav from './components/GooeyNav'
import DotGrid from './components/DotGrid'
import GradientText from './components/Text/GradientText';
import LetterGlitch from './components/LetterGlitch';
import BlurText from './components/Text/BlurText';
import ScrambledText from './components/ScrambledText';
import Section from './pages/SpotlightCardGrid';
import TextPressure from './components/Text/TextPressure';
import ScrollVelocity from './components/Text/ScrollVelocity';
import SpotlightCard from './components/SpotlightCard';
import SpotlightCardGrid from './pages/SpotlightCardGrid';
function App() {

  const [firstDone, setFirstDone] = useState(false);
  // update with your own items
  const items = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#" },
    { label: "SKILLS", href: "#" },
    { label: "ACHIEVEMENTS", href: "#" },
    { label: "PROJECTS", href: "#" },
    { label: "CERTIFICATIONS", href: "#" },
    { label: "CONTACT", href: "#" },
  ];
  const handleAnimationComplete = () => {
    setFirstDone(true);
  };

  return (
    <div className="min-h-screen w-full m-0 p-0">
      <div style={{ width: '100%', height: '200vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }} className='bg-black'>
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
          <ScrambledText
            className="scrambled-text-demo -mt-2 "
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars={"."}
          >
            I'm a passionate software engineer with expertise in modern web technologies.
          </ScrambledText>
          <ScrambledText
            className="scrambled-text-demo -mt-28 "
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
          className="text-white font-mono"
        />
        <SpotlightCardGrid/>
        <ScrollVelocity
          texts={['Mastery']}
          velocity={100}
          className="text-white font-mono"
        />

      </div>

    </div >
  )
}

export default App
