import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '../components';
import WobbleComponent from '@components/custom/Portal';
import StarWars from '@components/custom/StarWars';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const PortalContainer = styled.div`
  position: fixed;
  top: 100px; // Always stay 10px from the top
  left: ${props => (props.centered ? '50%' : '10px')};
  transform: ${props => (props.centered ? 'translateX(-50%) scale(1)' : 'scale(0.15)')};
  width: ${props => (props.centered ? '35%' : '0%')};
  transition:
    left 0.5s ease-in-out,
    transform 0.5s ease-in-out;
  z-index: 500;

  &:hover {
    transform: ${props => (props.centered ? 'translateX(-50%) scale(1)' : 'scale(0.25)')};
  }
`;

const IndexPage = ({ location }) => {
  const heroRef = useRef(null);
  const portalRef = useRef(null);
  const starWarsRef = useRef(null);
  const [showPortal, setShowPortal] = useState(false);

  const handleContainerClick = e => {
    if (!showPortal) {
      // Only toggle the portal if it's not enlarged
      setShowPortal(true);
    }
    e.stopPropagation();
  };

  useEffect(() => {
    const updateMousePosition = ev => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;
      document.documentElement.style.setProperty('--x', `${clientX}px`);
      document.documentElement.style.setProperty('--y', `${clientY}px`);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = event => {
      console.log('Clicked target: ', event.target); // Check the clicked element

      if (
        showPortal &&
        portalRef.current &&
        !portalRef.current.contains(event.target) &&
        starWarsRef.current &&
        !starWarsRef.current.contains(event.target)
      ) {
        console.log('Closing portal.'); // Check if the portal is being closed

        setShowPortal(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showPortal]);

  return (
    <div ref={heroRef}>
      <style jsx global>
        {`
          html body {
            height: 100vh;
            width: 100%;
            background-color: var(--navy) !important;

            background-image: radial-gradient(
              circle 250px at var(--x, 10px) var(--y, 10px),
              #0404b5 0%,
              var(--navy) 100%
            ) !important;
          }
        `}
      </style>
      <div>
        <Layout location={location}>
          <StyledMainContainer>
            <PortalContainer centered={showPortal} onClick={handleContainerClick} ref={portalRef}>
              <WobbleComponent />
              {showPortal && <StarWars isPortalOpen={showPortal} ref={starWarsRef} />}
            </PortalContainer>

            <Hero />
            <About />
            <Jobs />
            <Featured />
            <Projects />
            <Contact />
          </StyledMainContainer>
        </Layout>
      </div>
    </div>
  );
};

export default IndexPage;
