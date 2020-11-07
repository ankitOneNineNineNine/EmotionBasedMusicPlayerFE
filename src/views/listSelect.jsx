import React from "react";

export default function ListSelect({ shown, listSelected, nowPlaying }) {
  let stylex = shown
    ? { zIndex: "1", display: "block" }
    : { zIndex: "-1", display: "none" };
  return (
    <div id="list-select" style={stylex}>
      <h2
        onClick={() => listSelected("Happy")}
        style={nowPlaying === "Happy" ? { background: "green" } : {}}
      >
        Happy Songs
      </h2>

      <h2
        onClick={() => listSelected("Sad")}
        style={nowPlaying === "Sad" ? { background: "green" } : {}}
      >
        Sad Songs
      </h2>

      <h2
        onClick={() => listSelected("Surprise")}
        style={nowPlaying === "Surprise" ? { background: "green" } : {}}
      >
        Surprise Songs
      </h2>

      <h2
        onClick={() => listSelected("Angry")}
        style={nowPlaying === "Angry" ? { background: "green" } : {}}
      >
        Angry Songs
      </h2>
    </div>
  );
}
