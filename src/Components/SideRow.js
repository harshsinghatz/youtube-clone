import React from "react";
import "../css/SideRow.css";
function SideRow({ title, Icon, selected }) {
  const sideRowClass = `siderow ${selected ? "selected" : ""}`.trim();
  return (
    <div className={sideRowClass}>
      <Icon className="siderow__icon" />
      {title ? <div className="siderow__title">{title}</div> : null}
    </div>
  );
}

export default SideRow;
