import "./App.css";
import React, { useEffect, useState } from "react";
import Player from "./container/player";
import songs from "./helpers/songs";
import EmotionCam from "./container/emotionCam";
import Form from "./container/form";
import Modal from "./portals/modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormContext = React.createContext();
function App() {
  const [playlistFromEmotion, setPlaylistFromEmotion] = useState(null);
  const [emotionFinder, setEmotionFinder] = useState(false);
  const [formDisplay, setFormDisplay] = useState(false);
  const dispForm = (val) => {
    setFormDisplay(val);
  };
  const setEmPl = (emotion) => {
    setPlaylistFromEmotion(emotion);
    setEmotionFinder(false);
  };

  const findEmotion = (val) => {
    setEmotionFinder(val);
  };

  return (
    <>
      {emotionFinder ? (
        <Modal>
          <EmotionCam setEmPl={setEmPl} findEmotion={findEmotion} />
        </Modal>
      ) : null}
      {formDisplay ? (
        <Modal>
          <Form />
        </Modal>
      ) : null}
      <FormContext.Provider value={dispForm}>
        <Player
          allSongs={songs}
          findEmotion={findEmotion}
          playlistFromEmotion={playlistFromEmotion}
        />
      </FormContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
