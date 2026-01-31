import Player from "./Player";
import { useHistory } from "../hooks/useHistory";
import { useWatchLater } from "../hooks/useWatchLater";

function VideoCard({ video }) {
  const { save } = useHistory();
  const { toggle } = useWatchLater();

  return (
    <div className="card">
      <Player
        embedId={video.embedId}
        onPlay={() => save(video)}
      />
      <h4>{video.title}</h4>
      <p>{video.channel}</p>
      <button onClick={() => toggle(video)}>
        Watch Later
      </button>
    </div>
  );
}

export default VideoCard;
