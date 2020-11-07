import React, { useEffect, useRef, useState } from "react";
import ImageDisplay from "../views/imageDisplay";
import axios from "axios";
import { dispError, dispSuccess } from "../helpers/toaster";
const EmotionCam = ({ setEmPl, findEmotion }) => {
  const fileRef = useRef(null);
  const videoRef = useRef(null);
  const [imageSelect, setImageSelect] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [emotion, setEmotion] = useState(null);
  const [camShow, setCamShow] = useState(false);
  const [cam, setCam] = useState(false);
  const [camImgUri, setCamImgUri] = useState(undefined);
  const inputChange = (e) => {
    let file = e.target.files[0];
    setFile(file);
    setURL(URL.createObjectURL(file));
    setCam(false);
  };
  const setcanvUri = (uri) => {
    setCamImgUri(uri);
  };
  const send = (e) => {
    e.preventDefault();
    if (cam) {
      axios({
        url: `http://localhost:8000/emotion`,
        method: "POST",
        data: {
          uri: camImgUri,
        },
      })
        .then((data) => {
          console.log("Emotion", data.data);
        })
        .catch((err) => {
          dispError(err);
          console.log();
        });
    } else {
      var formData = new FormData();
      formData.append("img", file);
      axios({
        url: `http://localhost:8000/emotion`,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: formData,
      })
        .then((data) => {
          setEmotion(data.data);
          setEmPl(data.data);
          dispSuccess(data.data);
        })
        .catch((err) => {
          dispError(err);
        });
    }
  };
  const imageSelectGoBack = () => {
    setImageSelect(false);
  };
  const captured = (e) => {
    e.preventDefault();
    setURL(videoRef.current);
    setCamShow(false);
    setCam(true);
    setImageSelect(true);
  };

  useEffect(() => {
    if (url.length) setImageSelect(true);
    (async function () {
      if (camShow) {
        let stream = await navigator.mediaDevices.getUserMedia({ video: true });
        window.stream = stream;
        videoRef.current.srcObject = stream;
      } else {
        if (window.stream) {
          window.stream.getTracks().forEach(function (track) {
            track.stop();
          });
        }
      }
    })();
  }, [url, emotion, camShow]);
  var displayEmotion;
  if (emotion && imageSelect) {
    displayEmotion = (
      <p
        style={{
          fontWeight: "bolder",
          textAlign: "center",
          fontSize: "2em",
          background: "black",
        }}
      >
        Emotion is {emotion}
      </p>
    );
  }
  return (
    <>
      <span onClick={() => findEmotion(false)}>&times;</span>
      {imageSelect ? (
        <ImageDisplay
          cam={cam}
          url={url}
          goBack={imageSelectGoBack}
          send={send}
          setcanvUri={setcanvUri}
        />
      ) : (
        <>
          {!camShow ? (
            <div className="choose">
              <div
                className="file"
                onClick={() => {
                  fileRef.current.click();
                }}
              >
                <i className="fa fa-file-image fa-5x"></i>
                <h3>Choose from a File</h3>
                <input
                  id="fileChoose"
                  type="file"
                  ref={fileRef}
                  onChange={inputChange}
                />
              </div>

              <div className="camera" onClick={() => setCamShow(true)}>
                <i className="fa fa-camera fa-5x"></i>
                <h3>Capture from Camera</h3>
              </div>
            </div>
          ) : (
            <div>
              <video
                style={{ display: "block", margin: "auto" }}
                ref={videoRef}
                width="400"
                height="400"
                autoPlay
              />
              <button className="designedButton" onClick={captured}>
                Capture
              </button>
            </div>
          )}
        </>
      )}
      {displayEmotion}
    </>
  );
};
export default EmotionCam;
