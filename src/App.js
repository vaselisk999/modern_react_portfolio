import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HomeComponent from './components/Home';
import ContactComponent from './components/Contacts';
import ProjectsComponent from './components/Projects';

// Little helpers ...
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function App() {
  const parallax = useRef(null);


  return (
    <>
      <Router>
        <Header parallax={parallax} />

        <div style={{ width: '100%', height: '100%', background: '#253237' }}>
          <Parallax ref={parallax} pages={3} style={{ backgroundColor: '#253237', overflow: "hidden" }}>
            <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

            <ParallaxLayer
              offset={0}
              speed={0}
              factor={3}
              style={{
                backgroundImage: url('stars', true),
                backgroundSize: 'cover',
              }}
            />

            <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
              <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} alt="" />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="" />
              <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="" />
            </ParallaxLayer>

            <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} alt="" />
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} alt="" />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
              <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="" />
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} alt="" />
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} alt="" />
              <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} alt="" />
              <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} alt="" />
            </ParallaxLayer>

            <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} alt="" />
              <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} alt="" />
            </ParallaxLayer>

            <ParallaxLayer
              offset={2.5}
              speed={-0.4}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
              }}>
              <img src={url('earth')} style={{ width: '60%' }} alt="" />
            </ParallaxLayer>

            <ParallaxLayer
              offset={2}
              speed={-0.3}
              style={{
                backgroundSize: '80%',
                backgroundPosition: 'center',
                backgroundImage: url('clients', true),
              }}
            />
            

            <ParallaxLayer
              offset={0}
              speed={0.1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <HomeComponent />
            </ParallaxLayer>

            <ParallaxLayer
              offset={1}
              speed={0.1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ProjectsComponent />
            </ParallaxLayer>

            <ParallaxLayer
              offset={2}
              speed={-0}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ContactComponent />
            </ParallaxLayer>
          </Parallax>
        </div>
      </Router>

    </>
  )
}
