import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import animationData from "../json/rubber3.json";

const AniNav = () => {
  const animationContainer = useRef(null);
  const hasLoopedOnce = useRef(false);
  const [initialized, setInitialized] = useState(false);
  const animInstance = useRef(null); // Reference to Lottie animation instance

  useEffect(() => {
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) return;

    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData,
    });

    animInstance.current = anim; // Store the animation instance

    anim.addEventListener("DOMLoaded", () => {
      const svgElements = document.querySelectorAll("#aninav svg path");

      svgElements.forEach((path, index) => {
        const attributeValue = `value-${index}`;
        path.setAttribute("data-custom-attribute", attributeValue);

        if (attributeValue === "value-31") {
          // Add hover event listeners for value-48
          path.addEventListener("mouseover", handleMouseOver);
          path.addEventListener("mouseout", handleMouseOut);
        }

        // Add click event listener for navigation
        path.addEventListener("click", () => {
          const urlMap = {
            "value-30": "/join",
            "value-53": "/initiatives",
            "value-45": "/team",
            "value-75": "/publications",
            "value-100": "/news",
            "value-123": "/give",
            "value-113": "/events",
          };

          if (urlMap[attributeValue]) {
            window.location.href = urlMap[attributeValue];
          }
        });
      });
    });

    anim.addEventListener("complete", () => {
      if (!hasLoopedOnce.current) {
        hasLoopedOnce.current = true;
        anim.loop = true;
        anim.playSegments([83, 300], true); // Set the loop segment from frame 83 to 300
      }
    });

    // Start animation from frame 0 to 300 on initial load
    anim.playSegments([0, 300], true);

    return () => {
      anim.destroy();
    };
  }, [initialized]);

  const handleMouseOver = () => {
    const anim = animInstance.current;
    if (anim) {
      anim.loop = true; // Disable loop temporarily
      anim.stop(); // Ensure animation stops before jumping to new segment
      anim.playSegments([301, 517], true); // Jump to frame 301 and play until frame 517
    }
  };

  const handleMouseOut = () => {
    const anim = animInstance.current;
    if (anim) {
      anim.stop(); // Ensure the hover segment stops before returning to the loop
      anim.loop = true; // Re-enable loop
      anim.playSegments([83, 300], true); // Return to loop between frames 83 and 300
    }
  };

  return (
    <div
      ref={animationContainer}
      style={{ width: 1200, height: 'auto' }}
      id="aninav"
    >
      {/* The Lottie animation will be rendered here */}
    </div>
  );
};

export default AniNav;
