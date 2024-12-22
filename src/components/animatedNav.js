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
    join: {
      pathIncludes: ["value-44", "value-60"],
      url: "/join",
      hoverAnim: hoverTeamAnim,
      hoverContainer: hoverTeamAnimationContainer,
    },
    initiatives: {
      pathIncludes: ["value-66", "value-76"],
      url: "/initiatives",
      hoverAnim: hoverInitiativesAnim,
      hoverContainer: hoverInitiativesAnimationContainer,
    },
    publications: {
      pathIncludes: ["publications", "Publications", "pubs", "Pubs"],
      url: "/publications",
      hoverAnim: hoverPubsAnim,
      hoverContainer: hoverPubsAnimationContainer,
    },
    news: {
      pathIncludes: ["news", "News"],
      url: "/news",
      hoverAnim: hoverNewsAnim,
      hoverContainer: hoverNewsAnimationContainer,
    },
    events: {
      pathIncludes: ["events", "Events"],
      url: "/events",
      hoverAnim: hoverEventsAnim,
      hoverContainer: hoverEventsAnimationContainer,
    },
    give: {
      pathIncludes: ["give", "Give"],
      url: "/give",
      hoverAnim: hoverGiveAnim,
      hoverContainer: hoverGiveAnimationContainer,
    },
  };

  const handleMouseOver = (animRef, container) => {
    if (animRef.current && container.current) {
      container.current.style.display = "block";
      animRef.current.goToAndPlay(0);
    }
  };

  const handleMouseLeave = (container) => {
    if (container.current) {
      container.current.style.display = "none";
    }
  };

  const handleClick = (url) => {
    if (typeof window !== "undefined") {
      window.location.href = url;
    }
  };

  // Function to determine which nav item a path belongs to
  const getNavTypeFromPath = (path) => {
    const id = path.getAttribute("id") || "";
    const className = path.getAttribute("class") || "";
    const identifiers = `${id} ${className}`.toLowerCase();

    return Object.entries(navConfig).find(([_, config]) =>
      config.pathIncludes.some((term) =>
        identifiers.includes(term.toLowerCase())
      )
    )?.[0];
  };

  // Initialize client-side functionality
  useEffect(() => {
    setIsClient(true);

    const initLottie = async () => {
      if (typeof window !== "undefined") {
        try {
          const lottieModule = await import("lottie-web");
          setLottieInstance(lottieModule.default);
        } catch (error) {
          console.error("Failed to load lottie-web:", error);
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
          {
            ref: hoverAnim,
            container: hoverAnimationContainer,
            data: hoverAnimationData,
          },
          {
            ref: hoverTeamAnim,
            container: hoverTeamAnimationContainer,
            data: hoverAnimationTeam,
          },
          {
            ref: hoverInitiativesAnim,
            container: hoverInitiativesAnimationContainer,
            data: hoverAnimationInitiatives,
          },
          {
            ref: hoverPubsAnim,
            container: hoverPubsAnimationContainer,
            data: hoverAnimationPubs,
          },
          {
            ref: hoverNewsAnim,
            container: hoverNewsAnimationContainer,
            data: hoverAnimationNews,
          },
          {
            ref: hoverEventsAnim,
            container: hoverEventsAnimationContainer,
            data: hoverAnimationEvents,
          },
          {
            ref: hoverGiveAnim,
            container: hoverGiveAnimationContainer,
            data: hoverAnimationGive,
          },
        ].forEach(({ ref, container, data }) => {
          initializeHoverAnimation(ref, container, data);
        });

        // Setup event listeners
        const setupEventListeners = () => {
          const svgElement = animationContainer.current.querySelector("svg");
          svgElement.style.pointerEvents = "none";

          // Find all interactive elements
          const interactiveElements = svgElement.querySelectorAll("g");

          // Define URL mapping
          const urlMap = {
            "value-14": "/join",
            "value-24": "/join",
            "value-48": "/team",
            "value-50": "/team",
            "value-76": "/initiatives",
            "value-66": "/initiatives",
            "value-97": "/publications",
            "value-107": "/publications",
            "value-131": "/news",
            "value-133": "/news",
            "value-161": "/events",
            "value-163": "/events",
            "value-191": "/give",
            "value-193": "/give",
          };

          interactiveElements.forEach((element, path, index) => {
            const attributeValue = `value-${path}`;
            element.setAttribute("data-custom-attribute", attributeValue);

            // Make specific elements interactive
            if (
              attributeValue === "value-14" ||
              attributeValue === "value-24"
            ) {
              // Enable pointer events and set cursor
              element.style.pointerEvents = "auto";
              element.style.cursor = "pointer";

              // Add join-specific hover events
              element.addEventListener("mouseover", handleMouseOver);
              element.addEventListener("mouseleave", handleMouseLeave);

              // Add click event with navigation
              element.addEventListener("click", () => {
                const url = urlMap[attributeValue];
                if (url) {
                  window.location.href = url;
                }
              });
            } 
            else if (
              attributeValue === "value-48" ||
              attributeValue === "value-50"
            ) {
              // Enable pointer events and set cursor
              element.style.pointerEvents = "auto";
              element.style.cursor = "pointer";

              // Add team-specific hover events
              element.addEventListener("mouseover", handleTeamMouseOver);
              element.addEventListener("mouseleave", handleTeamMouseLeave);

              // Add click event with navigation
              element.addEventListener("click", () => {
                const url = urlMap[attributeValue];
                if (url) {
                  window.location.href = url;
                }
              });
            }
            else if (
              attributeValue === "value-76" ||
              attributeValue === "value-66"
            ) {
              // Enable pointer events and set cursor
              element.style.pointerEvents = "auto";
              element.style.cursor = "pointer";

              // Add team-specific hover events
              element.addEventListener("mouseover", handleInitiativesMouseOver);
              element.addEventListener("mouseleave", handleInitiativesMouseLeave);

              // Add click event with navigation
              element.addEventListener("click", () => {
                const url = urlMap[attributeValue];
                if (url) {
                  window.location.href = url;
                }
              });
            }
            else if (
              attributeValue === "value-97" ||
              attributeValue === "value-107"
            ) {
              // Enable pointer events and set cursor
              element.style.pointerEvents = "auto";
              element.style.cursor = "pointer";

              // Add team-specific hover events
              element.addEventListener("mouseover", handlePubsMouseOver);
              element.addEventListener("mouseleave", handlePubsMouseLeave);

              // Add click event with navigation
              element.addEventListener("click", () => {
                const url = urlMap[attributeValue];
                if (url) {
                  window.location.href = url;
                }
              });
            }
            else if (
              attributeValue === "value-131" ||
              attributeValue === "value-133"
            ) {
              // Enable pointer events and set cursor
              element.style.pointerEvents = "auto";
              element.style.cursor = "pointer";

              // Add team-specific hover events
              element.addEventListener("mouseover", handleNewsMouseOver);
              element.addEventListener("mouseleave", handleNewsMouseLeave);

              // Add click event with navigation
              element.addEventListener("click", () => {
                const url = urlMap[attributeValue];
                if (url) {
                  window.location.href = url;
                }
              });
            }
            else if (
              attributeValue === "value-161" ||
              attributeValue === "value-163"
            ) {
              // Enable pointer events and set cursor
              element.style.pointerEvents = "auto";
              element.style.cursor = "pointer";

              // Add team-specific hover events
              element.addEventListener("mouseover", handleEventsMouseOver);
              element.addEventListener("mouseleave", handleEventsMouseLeave);

              // Add click event with navigation
              element.addEventListener("click", () => {
                const url = urlMap[attributeValue];
                if (url) {
                  window.location.href = url;
                }
              });
            }
            else if (
              attributeValue === "value-191" ||
              attributeValue === "value-193"
            ) {
              // Enable pointer events and set cursor
              element.style.pointerEvents = "auto";
              element.style.cursor = "pointer";

              // Add team-specific hover events
              element.addEventListener("mouseover", handleGiveMouseOver);
              element.addEventListener("mouseleave", handleGiveMouseLeave);

              // Add click event with navigation
              element.addEventListener("click", () => {
                const url = urlMap[attributeValue];
                if (url) {
                  window.location.href = url;
                }
              });
            }
            
          });
        };

        const handleMouseOver = () => {
          hoverAnim.current.loop = true;
          hoverAnimationContainer.current.style.display = "block";
          hoverAnim.current.goToAndPlay(0);
        };

        const handleMouseLeave = () => {
          hoverAnim.current.stop();
          hoverAnimationContainer.current.style.display = "none";
        };

        const handleTeamMouseOver = () => {
          hoverTeamAnim.current.loop = true;
          hoverTeamAnimationContainer.current.style.display = "block";
          hoverTeamAnim.current.goToAndPlay(0);
        };

        const handleTeamMouseLeave = () => {
          hoverTeamAnim.current.stop();
          hoverTeamAnimationContainer.current.style.display = "none";
        };

        const handleInitiativesMouseOver = () => {
          hoverInitiativesAnim.current.loop = true;
          hoverInitiativesAnimationContainer.current.style.display = "block";
          hoverInitiativesAnim.current.goToAndPlay(0);
        };

        const handleInitiativesMouseLeave = () => {
          hoverInitiativesAnim.current.stop();
          hoverInitiativesAnimationContainer.current.style.display = "none";
        };

        const handlePubsMouseOver = () => {
          hoverPubsAnim.current.loop = true;
          hoverPubsAnimationContainer.current.style.display = "block";
          hoverPubsAnim.current.goToAndPlay(0);
        };

        const handlePubsMouseLeave = () => {
          hoverPubsAnim.current.stop();
          hoverPubsAnimationContainer.current.style.display = "none";
        };

        const handleNewsMouseOver = () => {
          hoverNewsAnim.current.loop = true;
          hoverNewsAnimationContainer.current.style.display = "block";
          hoverNewsAnim.current.goToAndPlay(0);
        };

        const handleNewsMouseLeave = () => {
          hoverNewsAnim.current.stop();
          hoverNewsAnimationContainer.current.style.display = "none";
        };

        const handleEventsMouseOver = () => {
          hoverEventsAnim.current.loop = true;
          hoverEventsAnimationContainer.current.style.display = "block";
          hoverEventsAnim.current.goToAndPlay(0);
        };

        const handleEventsMouseLeave = () => {
          hoverEventsAnim.current.stop();
          hoverEventsAnimationContainer.current.style.display = "none";
        };

        const handleGiveMouseOver = () => {
          hoverGiveAnim.current.loop = true;
          hoverGiveAnimationContainer.current.style.display = "block";
          hoverGiveAnim.current.goToAndPlay(0);
        };

        const handleGiveMouseLeave = () => {
          hoverGiveAnim.current.stop();
          hoverGiveAnimationContainer.current.style.display = "none";
        };

        // Set up listeners after animation is loaded
        anim.current.addEventListener("DOMLoaded", setupEventListeners);

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
        console.error("Error setting up animations:", error);
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
          hoverGiveAnim,
        ].forEach((animRef) => {
          if (animRef.current) animRef.current.destroy();
        });
      } catch (error) {
        console.error("Error cleaning up animations:", error);
      }
    };
  }, [lottieInstance, isClient]);

  return (
    <div
      style={{
        position: "relative",
        width: 1200,
        height: "50cqw",
        display: "block",
        visibility: isClient ? "visible" : "hidden",
      }}
    >
      <div
        ref={animationContainer}
        style={{
          width: "100%",
          height: "100%",
          zIndex: 3,
          position: "absolute",
        }}
        id="aninav"
      />
      <div
        ref={hoverAnimationContainer}
        style={{
          width: "100%",
          height: "100%",
          display: "none",
          position: "absolute",
          zIndex: 2,
        }}
        id="hoverAnim"
      />
      <div
        ref={hoverTeamAnimationContainer}
        style={{
          width: "100%",
          height: "100%",
          display: "none",
          position: "absolute",
          zIndex: 2,
        }}
        id="hoverTeamAnim"
      />
      <div
        ref={hoverInitiativesAnimationContainer}
        style={{
          width: "100%",
          height: "100%",
          display: "none",
          position: "absolute",
          zIndex: 2,
        }}
        id="hoverInitiativesAnim"
      />
      <div
        ref={hoverPubsAnimationContainer}
        style={{
          width: "100%",
          height: "100%",
          display: "none",
          position: "absolute",
          zIndex: 2,
        }}
        id="hoverPubsAnim"
      />
      <div
        ref={hoverNewsAnimationContainer}
        style={{
          width: "100%",
          height: "100%",
          display: "none",
          position: "absolute",
          zIndex: 2,
        }}
        id="hoverNewsAnim"
      />
      <div
        ref={hoverEventsAnimationContainer}
        style={{
          width: "100%",
          height: "100%",
          display: "none",
          position: "absolute",
          zIndex: 2,
        }}
        id="hoverEventsAnim"
      />
      <div
        ref={hoverGiveAnimationContainer}
        style={{
          width: "100%",
          height: "100%",
          display: "none",
          position: "absolute",
          zIndex: 2,
        }}
        id="hoverGiveAnim"
      />
    </div>
  );
};

export default AniNav;
