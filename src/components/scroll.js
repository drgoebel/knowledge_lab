import React, { useState, useContext, useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
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


const newsFeatures = [
  {
    "title": "Big teams and small careers",
    "description": "Larger teams worsen academic career prospects",
    "image_url": BigTeams,
    "link": "https://www.science.org/content/article/larger-teams-worsen-academic-career-prospects"
  },
  {
    "title": "Are We Doomed?",
    "description": "The New Yorker features James Evans & Daniel Holz' class exploring existential risk",
    "image_url": AreWeDoomed,
    "link": "https://drive.google.com/file/d/1cFWy_3cDGv-xrjwT4vTt7wl2-D2RM1fK/view?usp=sharing"
  },
  {
    "title": "$20M for Tech Futures",
    "description": "NSF invests $20M in Knowledge Lab to predict the future science and technology",
    "image_url": NSF,
    "link": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2404109&HistoricalAwards=false"
  },
  {
    "title": "Wendy Schmidt Award",
    "description": "Wendy Schmidt receives Science of Science Policy Leadership Award",
    "image_url": Schmidt,
    "link": "ACCEPTANCE VIDEO LINK YOUTUBE"
  },
  {
    "title": "Science of Science & Innovation",
    "description": "Knowledge hosts annual Innovation Conference at the National Academies in DC",
    "image_url": ICSSI,
    "link": "https://www.icssi.org/archive2024/speakers2024"
  },
  {
    "title": "Trends in AI",
    "description": "James Evans discusses the unfolding future of AI in 2024 on ProMarket",
    "image_url": Trends,
    "link": "https://www.promarket.org/2024/01/12/the-ai-trends-that-will-define-society-and-the-political-economy-in-2024/"
  },
  {
    "title": "Mapping Global Meanings",
    "description": "Molly Lewis and James Evans explore the organization of meanings across the globe",
    "image_url": Mapping,
    "link": "https://news.uchicago.edu/story/uchicago-researchers-use-machine-learning-examine-meanings-across-languages"
  },
  {
    "title": "AI as Alien Intelligence",
    "description": "James Evans makes the case for Alien AI in Chicago TEDx talk",
    "image_url": Mimic,
    "link": "https://www.youtube.com/watch?v=87zET-4IQws"
  },
  {
    "title": "Robot Scientists",
    "description": "Hypotheses devised by AI could find ‘blind spots’ in research",
    "image_url": Robot,
    "link": "https://www.nature.com/articles/d41586-023-03596-0"
  },
  {
    "title": "Science Slowing Down?",
    "description": "Is Scientific Progress Slowing?",
    "image_url": Slowing,
    "link": "https://podcasts.apple.com/us/podcast/is-scientific-progress-slowing-with-james-evans/id1368737097?i=1000555819493"
  }
]

function Scroll() {
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
      <div id="scroller" className="container" style={{ position: "relative" }}>
        {initialized && (
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {newsFeatures.map((newsItem, index) => (
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
        style={{ width: "30cqw", height: "100%", backgroundColor: "#efefef", padding: "10px", cursor: "pointer", paddingTop: "2cqw", marginBottom: "3cqw" }}
        tabIndex={0}
      >
        <div className="card">
          <a href={link} target="_blank"><img src={imageUrl} alt={title} style={{ width: "100%", height: "auto" }} /></a>
          <h2><a href={link} target="_blank">{title}</a></h2>
          <p>{description}</p>
          {/* <div>Visible: {JSON.stringify(visible)}</div>
          <div>Selected: {JSON.stringify(!!selected)}</div> */}
        </div>
      </div>
    </>
  );
}

export default Scroll;