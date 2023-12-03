import { useState } from "react";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

export const Dragger = ({ list, setList }) => {
  const [dragging, setDragging] = useState(null);
  const handleDragStart = (e, item) => {
    setDragging(item);
    e.dataTransfer.setData("text/plain", "");
  };
  const handleDragEnd = () => {
    setDragging(null);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e, target) => {
    if (!dragging) return;
    const currentIndex = list.findIndex((i) => i.value === dragging);
    const targetIndex = list.findIndex((i) => i.value === target);
    if (currentIndex !== -1 && targetIndex !== -1) {
      // sort
      setList((draft) => {
        const [removed] = draft.splice(currentIndex, 1);
        draft.splice(targetIndex, 0, removed);
        return draft; // return the new list
      });
    }
    setDragging(null);
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <>
      {list.map((item, idx) => (
        <>
          <div
            className={twMerge("draggableItem", dragging && "cursor-grabbing")}
            key={idx + item}
            draggable="true"
            onDragStart={(e) => {
              handleDragStart(e, item.value);
            }}
            onDragEnd={handleDragEnd}
            onDragOver={(e) => {
              handleDragOver(e);
            }}
            onDrop={(e) => handleDrop(e, item.value)}
          >
            <input
              className="w-full"
              value={item.value}
              onChange={(e) => {
                setList((draft) => {
                  draft[idx].value = e.target.value;
                });
              }}
            />
          </div>
        </>
      ))}
    </>
  );
};

Dragger.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};
