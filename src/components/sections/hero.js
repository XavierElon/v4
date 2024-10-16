import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Xavier Elon Hollingsworth.</h2>;
  const three = <h3 className="big-heading">I shape the future.</h3>;
  const four = (
    <>
      <p>
        I am a full-stack software engineer specializing in React, Typescript, Node, Express, and
        MongoDB. I am currently working at{' '}
        <a href="https://boozallen.com/" target="_blank" rel="noreferrer">
          Booz Allen
        </a>{' '}
        and am currently enrolled at{' '}
        <a href="https://omscs.gatech.edu/specialization-machine-learning">Georgia Tech</a> for my
        Masters in Computer Science specializing in AI/Machine Learning. I have 5+ years of
        professional experience. I have several side projects that I have built over the years that
        can be seen in my Portfolio. I have a passion for learning and building new things. I am
        always looking for new opportunities to learn and grow. I currently newly reside in San
        Francisco and am looking to join a local startup or Big Tech. My new portfolio website can
        be found at <a href="https://xavierelon-portfolio.vercel.app/">here</a>.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="https://github.com/XavierElon/XavierElon/blob/main/README.md"
      target="_blank"
      rel="noreferrer">
      Check out my Github
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
