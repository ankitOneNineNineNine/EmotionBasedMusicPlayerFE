import React from "react";
import { connect } from "react-redux";
import { setUser } from "../reduxComponents/action";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const Profile = ({ user, dispProfile }) => {
  const styleX = {
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid black",
    fontWeight: "bold",
  };

  return (
    <>
      <span onClick={() => dispProfile(false)}>&times;</span>
      <div
        style={{
          color: "black",
          width: "401px",
          displat: "block",
          margin: "auto",
          marginTop: "10px",
        }}
      >
        <div style={styleX}>
          <p>Email: {user.email}</p>
        </div>
        <div style={styleX}>
          <p>Username: {user.userName}</p>
        </div>
        {user.songs.length ? (
          <div style={styleX}>
            {user.songs.map((song, i) => {
              <div key={i} style={{ display: "block" }}>
                <p style={{ display: "inline" }}>{song.title}</p>
                <p style={{ float: "right", displat: "inline" }}>
                  {song.artist}
                </p>
              </div>;
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};
export default connect(mapStateToProps)(Profile);
