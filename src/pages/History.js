import VideoGrid from "../components/VideoGrid";

function History() {
  const videos = JSON.parse(localStorage.getItem("history")) || [];
  return <VideoGrid videos={videos} />;
}

export default History;