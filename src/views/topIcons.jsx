import React, { useContext } from "react";
import { FormContext } from "../App";
export default function TopIcons({ topIconHandler, color }) {
  const formCtx = useContext(FormContext);
  return (
    <div className="top-icons">
      <a href="#">
        <i
          onClick={() => topIconHandler("wishlist")}
          className="fa fa-heart"
          style={{ color: color }}
        ></i>
      </a>
      <button className="loginBtn" onClick={() => formCtx(true)}>
        Login
      </button>
      <a href="#">
        <i
          onClick={() => topIconHandler("emotionFinder")}
          className="fas fa-grin-alt"
        ></i>
      </a>
    </div>
  );
}
