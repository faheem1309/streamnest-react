import videos from "../data";
import VideoGrid from "../components/VideoGrid";

function Home() {
  return <VideoGrid videos={videos} />;
}

export default Home;