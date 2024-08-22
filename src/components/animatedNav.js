import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../json/klabnav-alt1.json";

const AniNav = () => {
  const animationContainer = useRef(null);
  const hasLoopedOnce = useRef(false);

  useEffect(() => {
    // Initialize the Lottie animation
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData,
    });
    
    // After animation is loaded, we can manipulate it
    anim.addEventListener("DOMLoaded", () => {
      // Access the layers in the animation
      const layers = anim.renderer.elements;
      const svgElements = document.querySelectorAll("#aninav svg path");

      // Example of adding data attributes to the paths
      svgElements.forEach((path, index) => {
        path.setAttribute("data-custom-attribute", `value-${index}`);

        // Add click event listener
        path.addEventListener("click", () => {
          // Create a mapping of data attribute values to their corresponding URLs
          const urlMap = {
            "value-212": "/join",
            "value-190": "/team",
            "value-147": "/initiatives",
            "value-143": "/publications",
            "value-121": "/news",
            "value-98": "/give",
            "value-56": "/workshops",
            "value-32": "/about",
          };

          // Get the data attribute value
          const attributeValue = path.getAttribute("data-custom-attribute");

          // Redirect to the corresponding URL if it exists in the map
          if (urlMap[attributeValue]) {
            window.location.href = urlMap[attributeValue];
          }
        });
      });
    });

    // Event listener for when the animation completes
    anim.addEventListener("complete", () => {
      if (!hasLoopedOnce.current) {
        // Mark that the first playthrough has completed
        hasLoopedOnce.current = true;
        // Set the animation to loop from now on
        anim.loop = true;
        // Move the playhead to the 1-second mark and start looping from there
        // Calculate the frame range for looping
        const totalFrames = anim.totalFrames;
        const oneSecondFrame = anim.frameRate * .9; // 1 second converted to frame number

        // Play from 1-second mark to the end, looping
        anim.playSegments([oneSecondFrame, totalFrames], true);
      }
    });

    return () => {
      anim.destroy(); // Clean up the animation on component unmount
    };
  }, []);

  return (
    <div
      ref={animationContainer}
      style={{ width: 1200, height: 660 }}
      id="aninav"
    >
      {/* The Lottie animation will be rendered here */}
    </div>
  );
};
export default AniNav;
