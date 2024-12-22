import React, { useEffect, useRef, useState } from "react";
import animationData from "../json/rubber2.json";
import hoverAnimationData from "../json/rubber3.json";
import hoverAnimationTeam from "../json/team-hover.json";
import hoverAnimationInitiatives from "../json/initiatives-hover2.json";
import hoverAnimationPubs from "../json/pubs-hover.json";
import hoverAnimationNews from "../json/news-hover.json";
import hoverAnimationEvents from "../json/events-hover.json";
import hoverAnimationGive from "../json/give-hover.json";

const AniNav = () => {
  const [isClient, setIsClient] = useState(false);
  const [lottieInstance, setLottieInstance] = useState(null);
  
  // Refs for all containers and animations
  const animationContainer = useRef(null);
  const hoverAnimationContainer = useRef(null);
  const hoverTeamAnimationContainer = useRef(null);
  const hoverInitiativesAnimationContainer = useRef(null);
  const hoverPubsAnimationContainer = useRef(null);
  const hoverNewsAnimationContainer = useRef(null);
  const hoverEventsAnimationContainer = useRef(null);
  const hoverGiveAnimationContainer = useRef(null);
  const hasLoopedOnce = useRef(false);
  const anim = useRef(null);
  const hoverAnim = useRef(null);
  const hoverTeamAnim = useRef(null);
  const hoverInitiativesAnim = useRef(null);
  const hoverPubsAnim = useRef(null);
  const hoverNewsAnim = useRef(null);
  const hoverEventsAnim = useRef(null);
  const hoverGiveAnim = useRef(null);

  // Navigation mapping with paths and URLs
  const navConfig = {
    team: {
      pathIncludes: ['team', 'Team'],
      url: '/team',
      hoverAnim: hoverTeamAnim,
      hoverContainer: hoverTeamAnimationContainer
    },
    initiatives: {
      pathIncludes: ['initiatives', 'Initiatives'],
      url: '/initiatives',
      hoverAnim: hoverInitiativesAnim,
      hoverContainer: hoverInitiativesAnimationContainer
    },
    publications: {
      pathIncludes: ['publications', 'Publications', 'pubs', 'Pubs'],
      url: '/publications',
      hoverAnim: hoverPubsAnim,
      hoverContainer: hoverPubsAnimationContainer
    },
    news: {
      pathIncludes: ['news', 'News'],
      url: '/news',
      hoverAnim: hoverNewsAnim,
      hoverContainer: hoverNewsAnimationContainer
    },
    events: {
      pathIncludes: ['events', 'Events'],
      url: '/events',
      hoverAnim: hoverEventsAnim,
      hoverContainer: hoverEventsAnimationContainer
    },
    give: {
      pathIncludes: ['give', 'Give'],
      url: '/give',
      hoverAnim: hoverGiveAnim,
      hoverContainer: hoverGiveAnimationContainer
    }
  };

  const handleMouseOver = (animRef, container) => {
    if (animRef.current && container.current) {
      container.current.style.display = 'block';
      animRef.current.goToAndPlay(0);
    }
  };

  const handleMouseLeave = (container) => {
    if (container.current) {
      container.current.style.display = 'none';
    }
  };

  const handleClick = (url) => {
    if (typeof window !== 'undefined') {
      window.location.href = url;
    }
  };

  // Function to determine which nav item a path belongs to
  const getNavTypeFromPath = (path) => {
    const id = path.getAttribute('id') || '';
    const className = path.getAttribute('class') || '';
    const identifiers = `${id} ${className}`.toLowerCase();

    return Object.entries(navConfig).find(([_, config]) => 
      config.pathIncludes.some(term => 
        identifiers.includes(term.toLowerCase())
      )
    )?.[0];
  };

  // Initialize client-side functionality
  useEffect(() => {
    setIsClient(true);
    
    const initLottie = async () => {
      if (typeof window !== 'undefined') {
        try {
          const lottieModule = await import('lottie-web');
          setLottieInstance(lottieModule.default);
        } catch (error) {
          console.error('Failed to load lottie-web:', error);
        }
      }
    };

    initLottie();
  }, []);

  // Initialize animations and event listeners
  useEffect(() => {
    if (!lottieInstance || !isClient) return;

    const setupAnimations = () => {
      try {
        // Initialize main animation
        anim.current = lottieInstance.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: animationData,
        });

        // Initialize hover animations
        const initializeHoverAnimation = (animRef, container, data) => {
          animRef.current = lottieInstance.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: data,
          });
        };

        // Initialize all hover animations
        [
          { ref: hoverAnim, container: hoverAnimationContainer, data: hoverAnimationData },
          { ref: hoverTeamAnim, container: hoverTeamAnimationContainer, data: hoverAnimationTeam },
          { ref: hoverInitiativesAnim, container: hoverInitiativesAnimationContainer, data: hoverAnimationInitiatives },
          { ref: hoverPubsAnim, container: hoverPubsAnimationContainer, data: hoverAnimationPubs },
          { ref: hoverNewsAnim, container: hoverNewsAnimationContainer, data: hoverAnimationNews },
          { ref: hoverEventsAnim, container: hoverEventsAnimationContainer, data: hoverAnimationEvents },
          { ref: hoverGiveAnim, container: hoverGiveAnimationContainer, data: hoverAnimationGive }
        ].forEach(({ ref, container, data }) => {
          initializeHoverAnimation(ref, container, data);
        });

        // Setup event listeners
        const setupEventListeners = () => {
          const svgElement = animationContainer.current.querySelector('svg');
          if (!svgElement) {
            console.error('SVG element not found');
            return;
          }
          // Make SVG container allow events to pass through
          svgElement.style.pointerEvents = 'none';

          // Find all interactive elements
          const interactiveElements = svgElement.querySelectorAll('path, rect, circle, g');
          
          interactiveElements.forEach(element => {

            const navType = getNavTypeFromPath(element);
            if (navType) {
              // Make element interactive
              element.style.pointerEvents = 'auto';
              element.style.cursor = 'pointer';

              // Store nav type
              element.dataset.navType = navType;

              // Add click handler
              element.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const config = navConfig[navType];
                if (config) {
                  handleClick(config.url);
                }
              });

              // Add hover handlers
              element.addEventListener('mouseenter', (e) => {
                
                e.stopPropagation();
                const config = navConfig[navType];
                if (config) {
                  handleMouseOver(config.hoverAnim, config.hoverContainer);
                }
              });

              element.addEventListener('mouseleave', (e) => {
                e.stopPropagation();
                const config = navConfig[navType];
                if (config) {
                  handleMouseLeave(config.hoverContainer);
                }
              });
            }
          });
        };

        // Set up listeners after animation is loaded
        anim.current.addEventListener('DOMLoaded', setupEventListeners);

        // Handle animation loop
        anim.current.addEventListener("complete", () => {
          if (!hasLoopedOnce.current) {
            hasLoopedOnce.current = true;
            anim.current.loop = true;
            anim.current.playSegments([83, 300], true);
          } else {
            anim.current.playSegments([83, 300], true);
          }
        });

      } catch (error) {
        console.error('Error setting up animations:', error);
      }
    };

    setupAnimations();

    // Cleanup
    return () => {
      try {
        if (anim.current) anim.current.destroy();
        [
          hoverAnim,
          hoverTeamAnim,
          hoverInitiativesAnim,
          hoverPubsAnim,
          hoverNewsAnim,
          hoverEventsAnim,
          hoverGiveAnim
        ].forEach(animRef => {
          if (animRef.current) animRef.current.destroy();
        });
      } catch (error) {
        console.error('Error cleaning up animations:', error);
      }
    };
  }, [lottieInstance, isClient]);

  return (
    <div style={{ 
      position: 'relative', 
      width: 1200, 
      height: '50cqw', 
      display: 'block',
      visibility: isClient ? 'visible' : 'hidden'
    }}>
      <div
        ref={animationContainer}
        style={{ width: '100%', height: '100%', zIndex: 3, position: 'absolute'}}
        id="aninav"
      />
      <div
        ref={hoverAnimationContainer}
        style={{ width: '100%', height: '100%', display: 'none', position: 'absolute', zIndex: 2 }}
        id="hoverAnim"
      />
      <div
        ref={hoverTeamAnimationContainer}
        style={{ width: '100%', height: '100%', display: 'none', position: 'absolute', zIndex: 2 }}
        id="hoverTeamAnim"
      />
      <div
        ref={hoverInitiativesAnimationContainer}
        style={{ width: '100%', height: '100%', display: 'none', position: 'absolute', zIndex: 2 }}
        id="hoverInitiativesAnim"
      />
      <div
        ref={hoverPubsAnimationContainer}
        style={{ width: '100%', height: '100%', display: 'none', position: 'absolute', zIndex: 2 }}
        id="hoverPubsAnim"
      />
      <div
        ref={hoverNewsAnimationContainer}
        style={{ width: '100%', height: '100%', display: 'none', position: 'absolute', zIndex: 2 }}
        id="hoverNewsAnim"
      />
      <div
        ref={hoverEventsAnimationContainer}
        style={{ width: '100%', height: '100%', display: 'none', position: 'absolute', zIndex: 2 }}
        id="hoverEventsAnim"
      />
      <div
        ref={hoverGiveAnimationContainer}
        style={{ width: '100%', height: '100%', display: 'none', position: 'absolute', zIndex: 2 }}
        id="hoverGiveAnim"
      />
    </div>
  );
};

export default AniNav;