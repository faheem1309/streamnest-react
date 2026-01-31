function Player({ embedId, onPlay }) {
  return (
    <iframe
      width="100%"
      height="200"
      src={`https://www.youtube.com/embed/${embedId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      onLoad={onPlay}
    ></iframe>
  );
}

export default Player;