import React from "react";

const HexagonLoading = (loading) => {
  if (!loading) <div />;
  return (
    <div className="hexagon" aria-label="hexagonal loading">
      <div className="hexagon__group">
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
      </div>
      <div className="hexagon__group">
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
      </div>
      <div className="hexagon__group">
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
      </div>
      <div className="hexagon__group">
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
      </div>
      <div className="hexagon__group">
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
      </div>
      <div className="hexagon__group">
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
        <div className="hexagon__sector"></div>
      </div>
    </div>
  );
};

export default HexagonLoading;
