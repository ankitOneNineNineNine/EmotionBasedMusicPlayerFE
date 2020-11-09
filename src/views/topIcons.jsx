import React, { useContext } from "react";
import { FormContext } from "../App";
import { connect } from "react-redux";
import { setUser } from "../reduxComponents/action";
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
function TopIcons({ topIconHandler, color, user, dispProfile }) {
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
      {user.userName ? (
        <button className="loginBtn" onClick={() => dispProfile(true)}>
          {user.userName}
        </button>
      ) : (
        <button className="loginBtn" onClick={() => formCtx(true)}>
          Login
        </button>
      )}
      <a href="#">
        <i
          onClick={() => topIconHandler("emotionFinder")}
          className="fas fa-grin-alt"
        ></i>
      </a>
    </div>
  );
}
export default connect(mapStateToProps)(TopIcons);
