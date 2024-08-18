import React from "react";
import TriangleDownIcon from "../Icons/TriangleDownIcon";
import "./BookmarkButton.scss";

function BookmarkButton() {
  return (
    <button className="header__bookmark-btn">
      bookmarks <TriangleDownIcon color="white" />
    </button>
  );
}

export default BookmarkButton;
