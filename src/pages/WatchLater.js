import VideoGrid from "../components/VideoGrid";

function WatchLater() {
  const videos = JSON.parse(localStorage.getItem("later")) || [];
  return <VideoGrid videos={videos} />;
}

export default WatchLater;