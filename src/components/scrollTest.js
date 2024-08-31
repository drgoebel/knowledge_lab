import React, { useEffect, useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const items = [
  { id: '1', content: 'Item 1' },
  { id: '2', content: 'Item 2' },
  { id: '3', content: 'Item 3' },
  { id: '4', content: 'Item 4' },
  { id: '5', content: 'Item 5' },
  { id: '6', content: 'Item 6' },
  { id: '7', content: 'Item 7' },
  { id: '8', content: 'Item 8' },
  { id: '9', content: 'Item 9' },
  { id: '10', content: 'Item 10' },
  { id: '11', content: 'Item 11' },
  // Add as many items as needed
];

const MenuItem = ({ id, content }) => {
  return (
    <div
      key={id}
      style={{
        display: 'inline-block',
        marginRight: '20px',
        width: '500px',
      }}
    >
      {content}
    </div>
  );
};

const AutoScroll = ({ items }) => {
  const { scrollNext, isItemVisible, scrollToItem } = React.useContext(VisibilityContext);
  const [lastItemVisible, setLastItemVisible] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      const lastItemVisible = isItemVisible(lastItem.id);
      const isVisible = isItemVisible(lastItem.id);
      setLastItemVisible(isVisible); // Update state when visibility changes

      console.log(isVisible);

      if (lastItemVisible) {
        scrollToItem(items[0].id); // Loop back to the first item
      } else {
        scrollNext(); // Scroll to the next item
      }
    }, 2000); // Adjust the delay time in milliseconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [scrollNext, isItemVisible, scrollToItem, items]);

  return null;
};

const ScrollTest = () => {
  return (
    <ScrollMenu>
      {items.map(({ id, content }) => (
        <MenuItem key={id} id={id} content={content} />
      ))}
      <AutoScroll items={items} />
    </ScrollMenu>
  );
};

export default ScrollTest;
