import React, { useState, useContext, useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Col } from "react-bootstrap";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../components/hideScrollbar.css";

function ScrollPubs({contentList}) {

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
            
            {contentList.map((cont, index) => (
              <Card
                key={cont.id} // Ensure unique keys
                itemId={cont.id}
                title={cont.title}
                link={cont.url}
                imageUrl={cont.image.url}
                onClick={handleClick(cont.id)}
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
          <a href={link} target="_blank"><img src={imageUrl} target="_blank" alt={title} style={{ width: "100%", height: "auto" }} /></a>
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