import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import animationData from "../json/rubber2.json";
import hoverAnimationData from "../json/rubber3.json";
import hoverAnimationTeam from "../json/team-hover.json";
import hoverAnimationInitiatives from "../json/initiatives-hover2.json";
import hoverAnimationPubs from "../json/pubs-hover.json";
import hoverAnimationNews from "../json/news-hover.json";
import hoverAnimationEvents from "../json/events-hover.json";
import hoverAnimationGive from "../json/give-hover.json";

const AniNav = () => {
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
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) return;

    // Initialize main animation
    anim.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData,
    });

    // Initialize hover animations
    hoverAnim.current = lottie.loadAnimation({
      container: hoverAnimationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: hoverAnimationData,
    });

    hoverTeamAnim.current = lottie.loadAnimation({
      container: hoverTeamAnimationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: hoverAnimationTeam,
    });

    hoverInitiativesAnim.current = lottie.loadAnimation({
      container: hoverInitiativesAnimationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: hoverAnimationInitiatives,
    });

    hoverPubsAnim.current = lottie.loadAnimation({
      container: hoverPubsAnimationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: hoverAnimationPubs,
    });
    hoverNewsAnim.current = lottie.loadAnimation({
      container: hoverNewsAnimationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: hoverAnimationNews,
    });

    hoverEventsAnim.current = lottie.loadAnimation({
      container: hoverEventsAnimationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: hoverAnimationEvents,
    });

    hoverGiveAnim.current = lottie.loadAnimation({
      container: hoverGiveAnimationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: hoverAnimationGive,
    });


    anim.current.addEventListener("DOMLoaded", () => {
      const svgElements = document.querySelectorAll("#aninav svg path");

      svgElements.forEach((path, index) => {
        const attributeValue = `value-${index}`;
        path.setAttribute("data-custom-attribute", attributeValue);

        if (attributeValue === "value-30" || attributeValue === "value-35") {
          path.addEventListener("mouseover", handleMouseOver);
          path.addEventListener("mouseleave", handleMouseLeave);
        }

        if (attributeValue === "value-44") {
          path.addEventListener("mouseover", handleTeamMouseOver);
          path.addEventListener("mouseleave", handleTeamMouseLeave);
        }

        if (attributeValue === "value-53") {
          path.addEventListener("mouseover", handleInitiativesMouseOver);
          path.addEventListener("mouseleave", handleInitiativesMouseLeave);
        }

        if (attributeValue === "value-75") {
          path.addEventListener("mouseover", handlePubsMouseOver);
          path.addEventListener("mouseleave", handlePubsMouseLeave);
        }

        if (attributeValue === "value-99") {
          path.addEventListener("mouseover", handleNewsMouseOver);
          path.addEventListener("mouseleave", handleNewsMouseLeave);
        }

        if (attributeValue === "value-112") {
          path.addEventListener("mouseover", handleEventsMouseOver);
          path.addEventListener("mouseleave", handleEventsMouseLeave);
        }

        if (attributeValue === "value-122") {
          path.addEventListener("mouseover", handleGiveMouseOver);
          path.addEventListener("mouseleave", handleGiveMouseLeave);
        }

        // Add click event listener for navigation
        path.addEventListener("click", () => {
          const urlMap = {
            "value-30": "/join",
            "value-35": "/join",
            "value-53": "/initiatives",
            "value-44": "/team",
            "value-45": "/team",
            "value-75": "/publications",
            "value-99": "/news",
            "value-122": "/give",
            "value-126": "/give",
            "value-112": "/events",
            "value-114": "/events",
          };

          if (urlMap[attributeValue]) {
            window.location.href = urlMap[attributeValue];
          }
        });
      });
    });

    anim.current.addEventListener("complete", () => {
      if (!hasLoopedOnce.current) {
        hasLoopedOnce.current = true;
        anim.current.loop = true;
        anim.current.playSegments([83, 300], true);
      } else {
        anim.current.playSegments([83, 300], true);
      }
    });

    return () => {
      anim.current.destroy();
      hoverAnim.current.destroy();
      hoverTeamAnim.current.destroy();
      hoverInitiativesAnim.current.destroy();
    };
  }, [initialized]);

  const handleMouseOver = () => {
    hoverAnim.current.loop = true;
    hoverAnimationContainer.current.style.display = 'block';
    hoverAnim.current.goToAndPlay(0);
  };

  const handleMouseLeave = () => {
    hoverAnim.current.stop();
    hoverAnimationContainer.current.style.display = 'none';
  };

  const handleTeamMouseOver = () => {
    hoverTeamAnim.current.loop = true;
    hoverTeamAnimationContainer.current.style.display = 'block';
    hoverTeamAnim.current.goToAndPlay(0);
  };

  const handleTeamMouseLeave = () => {
    hoverTeamAnim.current.stop();
    hoverTeamAnimationContainer.current.style.display = 'none';
  };

  const handleInitiativesMouseOver = () => {
    hoverInitiativesAnim.current.loop = true;
    hoverInitiativesAnimationContainer.current.style.display = 'block';
    hoverInitiativesAnim.current.goToAndPlay(0);
  };

  const handleInitiativesMouseLeave = () => {
    hoverInitiativesAnim.current.stop();
    hoverInitiativesAnimationContainer.current.style.display = 'none';
  };


  const handlePubsMouseOver = () => {
    hoverPubsAnim.current.loop = true;
    hoverPubsAnimationContainer.current.style.display = 'block';
    hoverPubsAnim.current.goToAndPlay(0);
  };

  const handlePubsMouseLeave = () => {
    hoverPubsAnim.current.stop();
    hoverPubsAnimationContainer.current.style.display = 'none';
  };

  const handleNewsMouseOver = () => {
    hoverNewsAnim.current.loop = true;
    hoverNewsAnimationContainer.current.style.display = 'block';
    hoverNewsAnim.current.goToAndPlay(0);
  };

  const handleNewsMouseLeave = () => {
    hoverNewsAnim.current.stop();
    hoverNewsAnimationContainer.current.style.display = 'none';
  };

  const handleEventsMouseOver = () => {
    hoverEventsAnim.current.loop = true;
    hoverEventsAnimationContainer.current.style.display = 'block';
    hoverEventsAnim.current.goToAndPlay(0);
  };

  const handleEventsMouseLeave = () => {
    hoverEventsAnim.current.stop();
    hoverEventsAnimationContainer.current.style.display = 'none';
  };

  const handleGiveMouseOver = () => {
    hoverGiveAnim.current.loop = true;
    hoverGiveAnimationContainer.current.style.display = 'block';
    hoverGiveAnim.current.goToAndPlay(0);
  };

  const handleGiveMouseLeave = () => {
    hoverGiveAnim.current.stop();
    hoverGiveAnimationContainer.current.style.display = 'none';
  };

  return (
    <div style={{ position: 'relative', width: 1200, height: '50cqw', display: 'block' }}>
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
        style={{ width: '100%', height: '100%', display: 'none', position: 'absolute', zIndex: 1 }}
        id="hoverInitiativesAnim"
      />
      <div
        ref={hoverPubsAnimationContainer}
        style={{ width: '100%', height: '100%', display: 'none', position: 'absolute', zIndex: 1 }}
        id="hoverPubsAnim"
      />
      <div
        ref={hoverNewsAnimationContainer}
        style={{ width: '100%', height: '100%', display: 'none', position: 'absolute', zIndex: 1 }}
        id="hoverNewsAnim"
      />
       <div
        ref={hoverEventsAnimationContainer}
        style={{ width: '100%', height: '100%', display: 'none', position: 'absolute', zIndex: 1 }}
        id="hoverEventsAnim"
      />
       <div
        ref={hoverGiveAnimationContainer}
        style={{ width: '100%', height: '100%', display: 'none', position: 'absolute', zIndex: 1 }}
        id="hoverGiveAnim"
      />
    </div>
    
  );
};

export default AniNav;
