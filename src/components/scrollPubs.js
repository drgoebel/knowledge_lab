import React, { useState, useContext, useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Col } from "react-bootstrap";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../components/hideScrollbar.css";
import Nature from "../images/nature-small-teams.png" 
import PNAS1 from "../images/pnas-1.jpg"
import PNAS2 from "../images/pnas-2.webp"  
import NatureDead from "../images/nature-dead.png"
import Scienctific from "../images/cover_sciencescience.webp"
import Nature2 from "../images/cover_yin2.webp"
import Meta from "../images/cover_foster.webp"
import Macy from "../images/cover_macy.webp"
import ScienctificSci from "../images/cover_scientificscience.webp"
import Machine from "../images/cover_machinelearning.webp"
import Electronic from "../images/cover_electronic.webp"
import Sourati from "../images/cover_sourati.webp"
import Global from "../images/cover_global.webp"
import PNAS3 from "../images/pnas3.webp"
import PNAS5 from "../images/pnas5.webp"
import PNAS6 from "../images/pnas6.webp"
import PNAS7 from "../images/pnas7.webp"
import NatureBio from "../images/nature-biotech.webp"
import NatureHuman from "../images/nature-human.webp"
import NatureComp from "../images/nature-computational.webp"

const pubFeatures = [
    
        {
            "title": "Small Teams Disrupt",
            "image_url": Nature,
            "link": "https://www.nature.com/articles/s41586-019-0941-9"
        },
        {
            "title": "Scientific Science",
            "image_url": Scienctific,
            "link": "https://www.science.org/doi/10.1126/science.aav2484"
        },
        {
            "title": "Quantifying Failures",
            "image_url": Nature2,
            "link": "https://www.nature.com/articles/s41586-019-1725-y"
        },
        {
            "title": "Metaknowledge",
            "image_url": Meta,
            "link": "https://www.science.org/doi/10.1126/science.1201765"
        },
        {
            "title": "Polarized Consumption",
            "image_url": Macy,
            "link": "https://www.nature.com/articles/s41562-017-0079"
        },
        {
            "title": "Science of Science",
            "image_url": ScienctificSci,
            "link": "https://www.science.org/doi/10.1126/science.aao0185"
        },
        {
            "title": "Soft Skills Matter",
            "image_url": PNAS1,
            "link": "https://www.pnas.org/doi/full/10.1073/pnas.1804247115"
        },
        {
            "title": "Machine Science",
            "image_url": Machine,
            "link": "https://www.science.org/doi/10.1126/science.1189416"
        },
        {
            "title": "Flat Teams Innovate",
            "image_url": PNAS2,
            "link": "https://www.pnas.org/doi/full/10.1073/pnas.2200927119"
        },
        {
            "title": "Less Digital Memory",
            "image_url": Electronic,
            "link": "https://www.science.org/doi/10.1126/science.1150473"
        },
        {
            "title": "Human-Aware AI",
            "image_url": Sourati,
            "link": "https://www.nature.com/articles/s41562-023-01648-z"
        },
        {
            "title": "Predicting Robust Ideas",
            "image_url": NatureDead,
            "link": "https://www.nature.com/articles/s42256-022-00474-8"
        },
        {
            "title": "Open Access Diffuses",
            "image_url": Global,
            "link": "https://www.science.org/doi/10.1126/science.1154562"
        },
        {
            "title": "Wise Polarized Crowds",
            "image_url": NatureHuman,
            "link": "https://www.nature.com/articles/s41562-019-0541-6"
        },
        {
            "title": "The Best Next Study",
            "image_url": PNAS3,
            "link": "https://www.pnas.org/doi/10.1073/pnas.1509757112"
        },
        {
            "title": "Genetic Embeddings",
            "image_url": NatureComp,
            "link": "https://www.nature.com/articles/s43588-023-00453-y"
        },
        {
            "title": "The Playlist of Life",
            "image_url": PNAS5,
            "link": "https://www.pnas.org/doi/abs/10.1073/pnas.2306549121"
        },
        {
            "title": "Language Info Density",
            "image_url": NatureDead,
            "link": "https://www.nature.com/articles/s41562-024-01815-w"
        },
        {
            "title": "Health ROI",
            "image_url": NatureBio,
            "link": "https://www.nature.com/articles/nbt.3276"
        },
        {
            "title": "Global Language Meanings",
            "image_url": PNAS6,
            "link": "https://www.pnas.org/doi/abs/10.1073/pnas.2300986120"
        },
        {
            "title": "Size & Slowed Progress",
            "image_url": PNAS7,
            "link": "https://www.pnas.org/doi/full/10.1073/pnas.2021636118"
        }
    
    
]

function ScrollPubs() {
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
      
        {initialized && (
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {pubFeatures.map((newsItem, index) => (
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
          <a href={link} ><img src={imageUrl} target="_blank" alt={title} style={{ width: "100%", height: "auto" }} /></a>
          <h3><a href={link} target="_blank" >{title}</a></h3>
          <p>{description}</p>
          {/* <div>Visible: {JSON.stringify(visible)}</div>
          <div>Selected: {JSON.stringify(!!selected)}</div> */}
        </div>
      </div>
    </>
  );
}

export default ScrollPubs;