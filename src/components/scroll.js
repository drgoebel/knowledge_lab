import React, { useState, useContext, useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "../components/hideScrollbar.css";


const newsFeatures = [
  {
    "title": "Big teams and small careers",
    "description": "Larger teams worsen academic career prospects",
    "image_url": "https://www.science.org/do/10.1126/science.zpu5tos/full/_20240821_on_careers_team_size-1724271601090.jpg",
    "link": "https://www.science.org/content/article/larger-teams-worsen-academic-career-prospects"
  },
  {
    "title": "Are We Doomed?",
    "description": "The New Yorker features James Evans & Daniel Holz' class exploring existential risk",
    "image_url": "https://drive.google.com/file/d/1EFmZjwn76jcZmCekdeh5EaZSP_RMk6bb/view?usp=sharing",
    "link": "https://drive.google.com/file/d/1cFWy_3cDGv-xrjwT4vTt7wl2-D2RM1fK/view?usp=sharing"
  },
  {
    "title": "$20M for Tech Futures",
    "description": "NSF invests $20M in Knowledge Lab to predict the future science and technology",
    "image_url": "https://drive.google.com/file/d/1EFmZjwn76jcZmCekdeh5EaZSP_RMk6bb/view?usp=sharing",
    "link": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2404109&HistoricalAwards=false"
  },
  {
    "title": "Wendy Schmidt Award",
    "description": "Wendy Schmidt receives Science of Science Policy Leadership Award",
    "image_url": "https://upworthyscience.com/media-library/schmidt-ocean-institute-co-founder-wendy-schmidt-is-backed-by-32-screens-in-research-vessel-falkor-s-control-room-where-most-of.jpg?id=24086513&width=2000&height=1500&quality=85&coordinates=89%2C0%2C89%2C0",
    "link": "ACCEPTANCE VIDEO LINK YOUTUBE"
  },
  {
    "title": "Science of Science & Innovation",
    "description": "Knowledge hosts annual Innovation Conference at the National Academies in DC",
    "image_url": "https://images.squarespace-cdn.com/content/v1/60c8fdcaee112d5cb209f019/0a550765-c435-4c79-80b9-9b6c34760378/KAP_ICSSI_2022_06_07-037.jpg?format=2500w",
    "link": "https://www.icssi.org/archive2024/speakers2024"
  },
  {
    "title": "Trends in AI",
    "description": "James Evans discusses the unfolding future of AI in 2024 on ProMarket",
    "image_url": "https://drive.google.com/file/d/1kWZ2CIyn9_hJXfPVBGTbc_dPp40TuPFS/view?usp=sharing",
    "link": "https://www.promarket.org/2024/01/12/the-ai-trends-that-will-define-society-and-the-political-economy-in-2024/"
  },
  {
    "title": "Mapping Global Meanings",
    "description": "Molly Lewis and James Evans explore the organization of meanings across the globe",
    "image_url": "https://drive.google.com/file/d/1OuTZdWGOlcH5ohsAABr8oOiHfI-FkvO5/view?usp=sharing",
    "link": "https://news.uchicago.edu/story/uchicago-researchers-use-machine-learning-examine-meanings-across-languages"
  },
  {
    "title": "AI as Alien Intelligence",
    "description": "James Evans makes the case for Alien AI in Chicago TEDx talk",
    "image_url": "https://drive.google.com/file/d/1xkVvuLJ61PtYk-LBeYDC7NaTkl7rkE3o/view?usp=sharing",
    "link": "https://www.youtube.com/watch?v=87zET-4IQws"
  },
  {
    "title": "Robot Scientists",
    "description": "Hypotheses devised by AI could find ‘blind spots’ in research",
    "image_url": "https://drive.google.com/file/d/1eupUx-8roqEGtUD0OOvYViTiYP_EH-4i/view?usp=sharing",
    "link": "https://www.nature.com/articles/d41586-023-03596-0"
  },
  {
    "title": "Science Slowing Down?",
    "description": "Is Scientific Progress Slowing?",
    "image_url": "https://drive.google.com/file/d/1LTVu5m8UzpjqlQ1FlSx6qTTrSqN0b_tS/view?usp=sharing",
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
      Left
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
      Right
    </button>
  );
};

function Card({ onClick, selected, title, description, imageUrl, itemId }) {
  const visibility = useContext(VisibilityContext);
  const visible = visibility.useIsVisible(itemId, true);

  return (
    <>
      <div
        onClick={() => onClick(itemId)}
        style={{ width: "20cqw", height: "20cqw", backgroundColor: "#efefef", padding: "10px", cursor: "pointer" }}
        tabIndex={0}
      >
        <div className="card">
          <img src={imageUrl} alt={title} style={{ width: "100%", height: "auto" }} />
          <h3>{title}</h3>
          <p>{description}</p>
          <div>Visible: {JSON.stringify(visible)}</div>
          <div>Selected: {JSON.stringify(!!selected)}</div>
        </div>
      </div>
    </>
  );
}

export default Scroll;