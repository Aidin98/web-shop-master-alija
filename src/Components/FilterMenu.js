import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import { useGlobalContext } from "../context";
import { filters } from "../Filters";
function Filter() {
  const { showData } = useGlobalContext();
  return (
    <div className="filter__section">
      {filters.map(({ filterName, filterOption }) => {
        return (
          <button
            onClick={() => showData(filterOption)}
            className="filter__item"
          >
            {filterName}
          </button>
        );
      })}
      <button onClick={() => showData('')} className="filter__item">
        SORT
      </button>
    </div>
  );
}

export default Filter;
