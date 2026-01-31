import VideoCard from "./VideoCard";

function VideoGrid({ videos }) {
  if (!videos.length) return <p style={{ padding: 20 }}>No videos available.</p>;

  return (
    <div className="grid">
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default VideoGrid;