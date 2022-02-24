import "./App.css";
import { useState, useEffect } from "react";
import VideoList from "./component/videolist/videolist";
function App() {
  const key = "AIzaSyCNba72n-CBpWIgALF-9iyW-TQMOf9vwLI";
  const [videoItems, setVideoItems] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${key}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideoItems(result.items);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="App">
      <VideoList videoItems={videoItems}></VideoList>
    </div>
  );
}

export default App;
