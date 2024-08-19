import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../json/klabnav.json";

const AniNav = () => {
  const animationContainer = useRef(null);

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
            "value-199": "/careers",
            "value-177": "/team",
            "value-146": "/initiatives",
            "value-120": "/news",
            "value-97": "/give",
            "value-55": "/workshops",
            // Add more mappings as needed
            "value-31": "/about", // Example for additional mapping
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
