import React from "react";

export default function BottomIcons({
  leftColor,
  rightColor,
  handleBottomButtons,
  songName,
}) {
  return (
    <>
      <div className="bottom-icons">
        <a href="#" onClick={() => handleBottomButtons("playlist")}>
          <i style={{ color: leftColor }} className="fa fa-list-ul"></i>
        </a>
        <h1>{songName ? songName : null}</h1>
        <a href="#" onClick={() => handleBottomButtons("listSelector")}>
          <i style={{ color: rightColor }} className="fas fa-ellipsis-v"></i>
        </a>
      </div>
    </>
  );
}
