import "./App.css";
import Header from "./components/Header";
import VideoCard from "./components/VideoCard";
import videos from "./data";

function App() {
  return (
    <>
      <Header />
      <div className="video-grid">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </>
  );
}

export default App;