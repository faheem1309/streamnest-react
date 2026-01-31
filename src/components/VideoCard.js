import { useState } from "react";
import "./VideoCard.css";

function VideoCard({ video }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="video-card">
      {!play ? (
        <div
          className="thumbnail"
          onClick={() => setPlay(true)}
        >
          <img
            src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
            alt={video.title}
          />
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
          title={video.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}

      <div className="info">
        <h4>{video.title}</h4>
        <p className="channel">{video.channel}</p>
        <p className="meta">{video.views} • {video.time}</p>
      </div>
    </div>
  );
}

export default VideoCard;