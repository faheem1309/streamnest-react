function VideoCard({ video }) {
  return (
    <div>
      <video src={video.videoUrl} controls width="100%" />
      <h4>{video.title}</h4>
      <p>{video.channel}</p>
    </div>
  );
}

export default VideoCard;