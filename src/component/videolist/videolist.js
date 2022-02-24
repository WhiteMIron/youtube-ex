import React from "react";
import Video from "../videos/video";
function VideoList(props) {
  return (
    <ul>
      {props.videoItems.map((videoItem) => {
        return <Video videoItem={videoItem} key={videoItem.id}></Video>;
      })}
    </ul>
  );
}

export default VideoList;
