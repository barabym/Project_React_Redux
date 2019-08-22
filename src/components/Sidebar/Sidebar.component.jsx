import React from "react";

import './Sidebar.styles.css';

import Search from "../Search";
import ItemList from "../ItemList";

function Sidebar() {

  return (
    <div className="sidebar">
      <Search />
      <ItemList />
    </div>
  )
}

export default Sidebar;