import React, { useState, useContext, useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Col } from "react-bootstrap";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../components/hideScrollbar.css";
import BigTeams from "../images/bigteams.webp"
import AreWeDoomed from "../images/arewedoomed.webp"
import Schmidt from "../images/schmidt.webp"
import NSF from "../images/nsf.webp"
import ICSSI from "../images/icssi.webp"
import Trends from "../images/trends.webp"
import Mapping from "../images/mapping.webp"
import Mimic from "../images/mimic.webp"
import Robot from "../images/robot.webp"
import Slowing from "../images/slowing.webp"
import Cultural from "../images/cultural.webp"
import AISociety from "../images/aisociety.webp"
import Global from "../images/global-observe.webp";
import Policy from "../images/policy-lab.webp";
import Computational from "../images/computational.webp"
import Digital from "../images/digital-minds.webp"
import Complementary from "../images/complementary.webp"
import Science2 from "../images/science2.webp"
import Existential from "../images/existential.webp"


const initiativeFeatures = [
  {
    "title": "Global Innovation Observatory",
    "description": "How can we use AI and big data improve our awareness of worldwide investment production position and trajectory in science and technology (S&T)?",
    "image_url": Global,
    "link": "/initiatives"
  },
  {
  "title": "Complementary AI",
  "description": "Can we build AI that augments rather than replaces human capacity?",
  "image_url": Complementary,
  "link":"/initiatives"
  },
  {
    "title": "Innovation Policy Lab",
    "description": "How can we use AI to construct a virtual laboratory that simulates policy outcomes for S&T innovation and competitiveness?",
    "image_url": Policy,
    "link": "/initiatives"
  },
  {
    "title": "Modeling Cultural Worlds",
    "description": "AI systems build models of the social cultural and language world. What can we learn from them?",
    "image_url": Cultural,
    "link": "/initiatives"
  },
  {
    "title": "AI Societies",
    "description": "How can we harness the emergent creativity of AI collectives?",
    "image_url": AISociety,
    "link": "/initiatives"
  },
  {
    "title": "Computational Creativity",
    "description": "How do we build AI that’s creative and augments human creativity?",
    "image_url": Computational,
    "link": "/initiatives"
  },
  {
    "title": "Digital Minds",
    "description": "Can we shine light into the 'black box' to better understand how AIs think?",
    "image_url": Digital,
    "link": "/initiatives"
  },
  {
  "title": "Science<sup>2</sup>",
  "image_url": Science2,
  "description": "How can science about the scientific process improve the rate, character, and capacity of knowledge about the world?",
  "link":"/initiatives"
  },
  {
    "title": "Existential Epistemology",
    "image_url": Existential,
    "description": "In order to anticipate and ensure humanity’s flourishing and long future what new forms of knowledge will we need to explore?",
    "link":"/initiatives"
  }
]

function ScrollHome() {
  const [selected, setSelected] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(true);
  }, []);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : [...currentSelected, id]
    );

    setModalContent(id); // Set modal content to the clicked item's id
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent(null);
  };

  return (
    <>
    
      <div id="scroller-home" className="container" style={{ position: "relative", paddingBottom: "clamp(16px, 2cqw, 32px)"}}>
      <h2>Featured Initiatives at Knowledge Lab</h2>
        {initialized && (
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {initiativeFeatures.map((newsItem, index) => (
              <Card
                itemId={`element-${index}`}
                key={`element-${index}`}
                title={newsItem.title}
                description={newsItem.description}
                imageUrl={newsItem.image_url}
                link={newsItem.link}
                onClick={handleClick(`element-${index}`)}
                selected={isItemSelected(`element-${index}`)}
              />
            ))}
          </ScrollMenu>
        )}
      </div>
    </>
  );
}

const LeftArrow = () => {
  const visibility = React.useContext(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible("first", true);

  return (
    <button
      disabled={isFirstItemVisible}
      onClick={() => visibility.scrollPrev()}
    >
       <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};

const RightArrow = () => {
  const visibility = React.useContext(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible("last", false);

  return (
    <button
      disabled={isLastItemVisible}
      onClick={() => visibility.scrollNext()}
    >
     <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
};

function Card({ onClick, selected, title, description, imageUrl, itemId, link }) {
  const visibility = useContext(VisibilityContext);
  const visible = visibility.useIsVisible(itemId, true);

  return (
    <>
      <div
        onClick={() => onClick(itemId)}
        style={{ width: "clamp(250px, 20cqw, 500px)", height: "100%", backgroundColor: "#efefef", padding: "10px", cursor: "pointer"}}
        tabIndex={0}
      >
        <div className="card">
          <a href={link} ><img src={imageUrl} alt={title} style={{ width: "100%", height: "auto" }} /></a>
          <h3 dangerouslySetInnerHTML={{ __html: `<a href="${link}">${title}</a>` }} />
          <p>{description}</p>
          {/* <div>Visible: {JSON.stringify(visible)}</div>
          <div>Selected: {JSON.stringify(!!selected)}</div> */}
        </div>
      </div>
    </>
  );
}

export default ScrollHome;