import React from "react";

function Video(props) {
  console.log("타이틀:", props);
  return <li>{props.videoItem.snippet.channelTitle}</li>;
}

export default Video;
